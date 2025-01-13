import { Resend } from 'resend';
const resend = new Resend(
	import.meta.env.VITE_RESEND_API_KEY
);

export const sendMail = async (contact) => {
	const { name, purpose, email, message, title } =
		contact;
	if (
		!name ||
		!purpose ||
		!email ||
		!message ||
		!title
	) {
		return new Promise((resolve, reject) => {
			return reject({
				status: 'failed',
				error: 'Missing required fields',
			});
		});
	}

	const html = `
        <h1>${title}</h1>
        <p>${message}</p>
        <p>From: ${name}</p>
        <p>Email: ${email}</p>
        <p>Purpose: ${purpose}</p>
    `;
	return new Promise(async (resolve, reject) => {
		const { data, error } =
			await resend.emails.send({
				from:
					'Aditya <no-reply@mailer.adidecodes.com>',
				to: ['singhaditya1826@gmail.com'],
				subject: 'New mail from portfolio',
				html: `Hii Aditya, New mail received from your portfolio. Details are as follows: ${html}`,
			});
		console.log(data, error);
		if (error) {
			return reject({
				status: 'failed',
				error: error,
			});
		}

		resolve({ status: 'success', resp: data });
	});
};
