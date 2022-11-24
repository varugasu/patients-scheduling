import Pocketbase from 'pocketbase'
import { env } from '$env/dynamic/private'

export const pb = new Pocketbase(env.POCKETBASE_URL)
