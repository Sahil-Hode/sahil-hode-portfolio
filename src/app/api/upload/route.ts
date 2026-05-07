import { NextResponse } from 'next/server';
import { uploadImage } from '@/lib/cloudinary';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  // Verify Auth
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'general';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${file.type};base64,${buffer.toString('base64')}`;

    const url = await uploadImage(base64Image, folder);
    
    return NextResponse.json({ url });
  } catch (error) {
    console.error('Upload API error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
