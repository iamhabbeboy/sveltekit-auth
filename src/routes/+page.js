/** @type {import('./$types').PageLoad} */
export const load = async ({ parent }) => {
	const { user } = await parent();
	if (user) {
		return {
			user: user
		};
	}
};
