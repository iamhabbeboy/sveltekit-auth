import { redirect } from '@sveltejs/kit';
import { createSession } from '../../store/db';
import { dev } from '$app/environment';

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');

		if (email === '' || password === '') {
			throw redirect(307, '/');
		}
		const { id } = await createSession(email, password);
		cookies.set('session_id', id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: !dev,
			maxAge: 60 * 60 * 24 * 7 // one week
		});
		throw redirect(303, '/protected');
	}
};
