import { NextRequest, NextResponse } from 'next/server';
import { IMailDTO } from './dto';
import { sendMessage } from '@server/utils/sendMessage';

export async function POST(req: NextRequest): Promise<
 NextResponse<{
  success: boolean;
 }>
> {
 const body: IMailDTO = await req.json();
 console.log(body);
 const res = await sendMessage(body);

 if (res.success) {
  return NextResponse.json(res, { status: 200 });
 } else {
  return NextResponse.json(res, { status: 500 });
 }
}
