import type { Handle } from '@sveltejs/kit'
import jwt_decode from 'jwt-decode'

interface JWT {
	id: string
	exp: number
	collectionId: string
	type: string
}

export const handle: Handle = async ({ event, resolve }) => {
	const jwt = event.cookies.get('token')

	event.locals.user = jwt ? jwt_decode<JWT>(jwt).id : null

	const response = await resolve(event)
	return response
}
