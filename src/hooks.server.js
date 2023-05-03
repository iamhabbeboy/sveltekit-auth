import { getUserById } from './store/db';

function redirect(location, body) {
	return new Response(body, {
		status: 303,
		headers: { location }
	});
}

const unProtectedRoutes = ['/', '/sign-up'];

export const handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('session_id');
	if (!sessionId && !unProtectedRoutes.includes(event.url.pathname))
		return redirect('/', 'No authenticated user.');

	const userInfo = await getUserById(sessionId);
	const currentUser = userInfo;

	if (currentUser) {
		event.locals.user = {
			isAuthenticated: true,
			email: currentUser.email,
			id: currentUser.id
		};
	} else {
		if (!unProtectedRoutes.includes(event.url.pathname)) {
			return redirect('/', 'Not a valid user');
		}
	}

	const query = event.url.searchParams.get('signout');
	if(Boolean(query) == true) {
		await event.cookies.delete("session_id", { path: '/' });
	}

	return resolve(event);
};
