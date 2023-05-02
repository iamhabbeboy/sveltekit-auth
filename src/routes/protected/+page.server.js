import { redirect } from "@sveltejs/kit";

/**
 * @param {{ locals: { user: any; }; }} event
 */
export function load(event) {
    console.log(event.locals.user)
    if(!event.locals.user) {
        throw redirect(303, '/')
    }
    return {
        user: event.locals.user,
    };
}