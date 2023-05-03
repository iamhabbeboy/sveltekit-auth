export const load = async ({ request, locals, cookies }) => {
    return {
        user: locals.user
    };
};