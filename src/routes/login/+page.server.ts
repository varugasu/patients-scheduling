import type { Actions, RequestEvent } from './$types'
import { pb } from '$lib/server/pocketbase'
import { ClientResponseError } from 'pocketbase'
import { invalid, redirect } from '@sveltejs/kit'

const login = async ({ request, cookies }: RequestEvent) => {
	const data = await request.formData()
	const email = data.get('email')?.toString()
	const password = data.get('password')?.toString()
	7
	if (email === undefined) {
		return invalid(400)
	}
	if (password === undefined) {
		return invalid(400)
	}

	try {
		const { token } = await pb.collection('users').authWithPassword(email, password)
		cookies.set('token', token)
	} catch (error) {
		if (error instanceof ClientResponseError) {
			if (error.status == 400) return invalid(400, { error: 'Invalid email or password' })
		}
		return invalid(500, { error: 'Something went wrong' })
	}

	throw redirect(307, '/')
}

export const actions: Actions = {
	default: login
}
