import { IFormData } from '@/models';
import { MessageTemplate } from '@/templates';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const API_KEY = process.env.NEXT_PUBLIC_RESEND_API_KEY || '';
const resend = new Resend(API_KEY);

export const POST = async (req: NextRequest) => {
  const formData: IFormData = await req.json();
  const { email, subject } = formData;

  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || '';

  try {
    const { data, error } = await resend.emails.send({
      from: `${email} <message@${domain}>`,
      to: ['lucasfilip@hotmail.se'],
      subject: subject || 'Portfolio message',
      react: MessageTemplate({ data: formData }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
