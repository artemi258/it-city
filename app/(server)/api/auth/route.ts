import { IAuth } from '@shared';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<
 NextResponse<{
  auth: boolean;
 }>
> {
 const body: IAuth = await req.json();

 if (body.login == process.env.AUTH_LOGIN && body.pass == process.env.AUTH_PASS) {
  return NextResponse.json({ auth: true }, { status: 200 });
 } else {
  return NextResponse.json({ auth: false }, { status: 400 });
 }
}
