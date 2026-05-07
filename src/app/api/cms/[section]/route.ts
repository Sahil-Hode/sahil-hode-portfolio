import { NextResponse } from 'next/server';
import { getFile, updateFile } from '@/lib/github';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET(
  req: Request,
  { params }: { params: { section: string } }
) {
  const section = params.section;
  const data = await getFile(`${section}.json`);
  
  if (!data) {
    return NextResponse.json({ error: 'Section not found' }, { status: 404 });
  }
  
  return NextResponse.json(data.content);
}

export async function POST(
  req: Request,
  { params }: { params: { section: string } }
) {
  // Verify Auth
  const cookieStore = cookies();
  const token = cookieStore.get('admin_token')?.value;
  
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const section = params.section;
  const body = await req.json();
  
  // Get current SHA to update
  const currentData = await getFile(`${section}.json`);
  if (!currentData) {
    return NextResponse.json({ error: 'Section not found' }, { status: 404 });
  }

  try {
    await updateFile(
      `${section}.json`,
      body,
      currentData.sha,
      `CMS Update: ${section}`
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
