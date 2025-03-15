import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const { userId, password } = await request.json();

    // Python 스크립트 실행 (파일 인자 제거)
    const { stdout, stderr } = await execPromise(
      `python3 scripts/main.py "${userId}" "${password}"`
    );

    if (stderr) {
      console.error('Python script error:', stderr);
      return NextResponse.json(
        { message: '데이터를 가져오는 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    // stdout에서 결과를 JSON으로 파싱
    const data = JSON.parse(stdout);

    // 응답 구조 보장
    return NextResponse.json({
      campaigns: data.campaigns || [],
      error: data.error
    });

  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: error.message || '알 수 없는 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}
