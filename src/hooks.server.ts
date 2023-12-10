import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function authorization({ event, resolve }: { event: any; resolve: any }) {
	// Protect any routes under /protected
	if (event.url.pathname.startsWith('/protected')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/auth');
		}
	}

	// redirecting if already signed-in
	if (event.url.pathname.startsWith('/auth')) {
		const session = await event.locals.getSession();
		if (session) {
			throw redirect(304, '/');
		}
	}

	return resolve(event);
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(
	SvelteKitAuth({
		providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
	}),
	authorization
);
