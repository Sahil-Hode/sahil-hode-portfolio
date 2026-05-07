import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (Note: Will reset on serverless function cold starts)
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();

const RATE_LIMIT_COUNT = 3; // Max 3 emails
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // per hour

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    if (ip !== 'unknown') {
      const rateLimitInfo = rateLimitMap.get(ip);
      if (rateLimitInfo) {
        if (now > rateLimitInfo.resetTime) {
          // Reset window
          rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
        } else if (rateLimitInfo.count >= RATE_LIMIT_COUNT) {
          return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
        } else {
          // Increment count
          rateLimitMap.set(ip, { count: rateLimitInfo.count + 1, resetTime: rateLimitInfo.resetTime });
        }
      } else {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      }
    }

    // 2. Parse Body
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required fields.' }, { status: 400 });
    }

    // 3. Configure Nodemailer
    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;
    
    console.log('SMTP Debug - User:', mailUser);
    console.log('SMTP Debug - Pass length:', mailPass?.length, 'chars');

    if (!mailUser || !mailPass) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    // 4. Send Email
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER, // Send to yourself
      replyTo: email, // So you can reply directly to the sender
      subject: `Portfolio Contact from ${name}: ${subject || 'No Subject'}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <h3>New Contact Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    // 5. Store message in messages.json
    try {
      const fs = require('fs').promises;
      const path = require('path');
      const filePath = path.join(process.cwd(), 'src/data/messages.json');
      
      const fileData = await fs.readFile(filePath, 'utf8');
      const messages = JSON.parse(fileData);
      
      const newMessage = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        phone,
        subject,
        message,
        date: new Date().toISOString(),
        read: false
      };
      
      messages.unshift(newMessage);
      await fs.writeFile(filePath, JSON.stringify(messages, null, 2));
    } catch (fsError) {
      console.error('Failed to store message in JSON:', fsError);
      // We don't return error here because the email was already sent successfully
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}
