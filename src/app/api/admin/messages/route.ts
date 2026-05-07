import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/messages.json');

export async function GET() {
  try {
    const fileData = await fs.readFile(filePath, 'utf8');
    const messages = JSON.parse(fileData);
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json([], { status: 200 }); // Return empty if file not found
  }
}

export async function PATCH(req: Request) {
  try {
    const { id, read } = await req.json();
    const fileData = await fs.readFile(filePath, 'utf8');
    let messages = JSON.parse(fileData);
    
    messages = messages.map((m: any) => m.id === id ? { ...m, read } : m);
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const fileData = await fs.readFile(filePath, 'utf8');
    let messages = JSON.parse(fileData);
    
    messages = messages.filter((m: any) => m.id !== id);
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
