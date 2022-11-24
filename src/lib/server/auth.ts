import type { RequestEvent } from '@sveltejs/kit'

const protectedRoutes = ['/']

export const isProtected = (route: string): boolean => {
	if (!protectedRoutes.includes(route)) return false

	return true
}

export const isAuthenticated = (event: RequestEvent) => {
	return event.locals.user !== null
}
