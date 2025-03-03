import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execPromise = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const { userId, password } = await request.json();
    
    // 임시 JSON 파일 경로 설정
    const tempFilePath = path.join(process.cwd(), 'temp', 'chvu_data.json');
    
    // 디렉토리가 없으면 생성
    await fs.mkdir(path.join(process.cwd(), 'temp'), { recursive: true });
    
    // 파이썬 스크립트 실행 (credentials과 출력 경로 전달)
    const { stderr } = await execPromise(
      `python3 scripts/main.py "${userId}" "${password}" "${tempFilePath}"`
    );
    
    if (stderr) {
      console.error('Python script error:', stderr);
      return NextResponse.json(
        { message: '데이터를 가져오는 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }
    
    // 결과 파일 읽기
    const dataExists = await fs.stat(tempFilePath).catch(() => false);
    
    if (!dataExists) {
      return NextResponse.json(
        { message: '데이터를 가져오지 못했습니다.' },
        { status: 404 }
      );
    }
    
    const rawData = await fs.readFile(tempFilePath, 'utf-8');
    const data = JSON.parse(rawData);
    
    // 파일 삭제 (선택적)
    await fs.unlink(tempFilePath).catch(console.error);
    
    return NextResponse.json({ campaigns: data.campaigns });
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any 
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: error.message || '알 수 없는 오류가 발생했습니다' },
      { status: 500 }
    );
  }
} 