import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type RouteContext = {
  params: Promise<{
    lang: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext 
) {
  const { lang } = await context.params; 
  return NextResponse.json({ message: 'API endpoint', lang });
}

export async function POST(
  request: Request,
  context: RouteContext 
) {
  try {
    const { lang } = await context.params; 
    const body = await request.json();
    const { name, email, message, phone, subject } = body;
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: process.env.EMAIL_SECURE === 'false',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      await transporter.verify();
    } catch (verifyError) {
      const errorMessage = lang === 'tr' 
        ? 'E-posta sunucusuna bağlanılamadı. Lütfen daha sonra tekrar deneyin veya bizimle doğrudan iletişime geçin.'
        : 'Could not connect to email server. Please try again later or contact us directly.';
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: lang === 'tr' ? `İletişim Formu: ${subject || 'Yeni Mesaj'}` : `Contact Form: ${subject || 'New Message'}`,
      text: `
        ${lang === 'tr' ? 'İsim' : 'Name'}: ${name}
        ${lang === 'tr' ? 'E-posta' : 'Email'}: ${email}
        ${phone ? `${lang === 'tr' ? 'Telefon' : 'Phone'}: ${phone}` : ''}
        
        ${lang === 'tr' ? 'Mesaj' : 'Message'}:
        ${message}
      `,
      html: `
        <h3>${lang === 'tr' ? 'İletişim Formu Mesajı' : 'Contact Form Message'}</h3>
        <p><strong>${lang === 'tr' ? 'İsim' : 'Name'}:</strong> ${name}</p>
        <p><strong>${lang === 'tr' ? 'E-posta' : 'Email'}:</strong> ${email}</p>
        ${phone ? `<p><strong>${lang === 'tr' ? 'Telefon' : 'Phone'}:</strong> ${phone}</p>` : ''}
        ${subject ? `<p><strong>${lang === 'tr' ? 'Konu' : 'Subject'}:</strong> ${subject}</p>` : ''}
        <p><strong>${lang === 'tr' ? 'Mesaj' : 'Message'}:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (sendError) {
      const errorMessage = lang === 'tr'
        ? 'E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin.'
        : 'Failed to send email. Please try again later.';
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    const successMessage = lang === 'tr'
      ? 'Mesajınız başarıyla gönderildi!'
      : 'Your message has been sent successfully!';
      
    return NextResponse.json({ success: true, message: successMessage });
    
  } catch (error) {
    const { lang } = await context.params;
    
    const errorMessage = lang === 'tr'
      ? 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      : 'An error occurred. Please try again later.';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 