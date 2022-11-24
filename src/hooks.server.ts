import type { Handle } from '@sveltejs/kit'
import jwt_decode from 'jwt-decode'
import { isProtected, isAuthenticated } from '$lib/server/auth'

interface JWT {
	id: string
	exp: number
	collectionId: string
	type: string
}

export const handle: Handle = async ({ event, resolve }) => {
	const jwt = event.cookies.get('token')

	event.locals.user = jwt ? jwt_decode<JWT>(jwt).id : null

	if (event.url.pathname === '/login' && isAuthenticated(event)) {
		return Response.redirect(`${event.url.origin}/`, 307)
	}

	if (isProtected(event.url.pathname) && !isAuthenticated(event)) {
		return Response.redirect(`${event.url.origin}/login`, 307)
	}

	const response = await resolve(event)
	return response
}
