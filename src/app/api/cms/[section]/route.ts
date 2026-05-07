import { NextResponse } from 'next/server';
import { getFile, updateFile } from '@/lib/github';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

const VALID_SECTIONS = ['about', 'projects', 'experience', 'education', 'skills', 'socials', 'contact'];

/** Read from local JSON file as fallback when GitHub API is unavailable */
function readLocalJson(section: string) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', `${section}.json`);
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function GET(
  req: Request,
  { params }: { params: { section: string } }
) {
  const section = (await params).section;

  if (!VALID_SECTIONS.includes(section)) {
    return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
  }

  // Try GitHub first, fall back to local JSON
  const ghData = await getFile(`${section}.json`);

  if (ghData) {
    return NextResponse.json(ghData.content);
  }

  // Fallback: read from local filesystem
  const localData = readLocalJson(section);
  if (localData) {
    return NextResponse.json(localData);
  }

  return NextResponse.json({ error: 'Section not found' }, { status: 404 });
}

export async function POST(
  req: Request,
  { params }: { params: { section: string } }
) {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const section = (await params).section;
  if (!VALID_SECTIONS.includes(section)) {
    return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
  }

  const body = await req.json();

  // Try GitHub update
  const currentData = await getFile(`${section}.json`);
  if (currentData) {
    try {
      await updateFile(
        `${section}.json`,
        body,
        currentData.sha,
        `CMS Update: ${section}`
      );
      return NextResponse.json({ success: true });
    } catch (error) {
      return NextResponse.json({ error: 'GitHub update failed' }, { status: 500 });
    }
  }

  // Fallback: write to local filesystem
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', `${section}.json`);
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Write failed' }, { status: 500 });
  }
}
