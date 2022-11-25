import { redirect } from '@sveltejs/kit'
import type { Actions, RequestEvent } from './$types'

export const actions: Actions = {
	logout: async ({ cookies, locals }: RequestEvent) => {
		cookies.delete('token')
		locals.user = null

		throw redirect(307, '/login')
	}
}
