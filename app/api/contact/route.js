import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request, response) {
	try {
		const { email, subject, message } = await request.json();

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.NEXT_PUBLICK_AUTH_USER,
				pass: process.env.NEXT_PUBLICK_AUTH_PASS,
			}
		})

		const mailOption = {
			from: email,
			to: process.env.NEXT_PUBLICK_AUTH_USER,
			subject: subject,
			text: message,
			html: `<p>${message}</p>`,
		}

		await transporter.sendMail(mailOption)

		return NextResponse.json({ message: "이메일 전송이 완료되었어요." }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: "이메일 전송을 실패했어요." }, { status: 500 })
	}
}