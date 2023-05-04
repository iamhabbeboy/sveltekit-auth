import { fail, redirect } from '@sveltejs/kit';
import { getUserByEmail } from '../../store/db';
import { dev } from '$app/environment';

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');

		if (email === '' || password === '') {
			throw redirect(307, '/');
		}
		const user = await getUserByEmail(email);
        if(!user || user.password !== password) {
            return fail(400, { email, incorrect: true });
        }
 
		cookies.set('session_id', user.id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: !dev,
			maxAge: 60 * 60 * 24 * 7 // one week
		});
        throw redirect(303, "/protected")
	}
};