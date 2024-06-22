'use server'

import 'server-only'
import { createUser } from "@/_lib/session"

export const signup = async (state: any, formData: FormData) => {
    const username = formData.get('username')
    const password = formData.get('password')

    // 1.validate data
    if (!username) {
        return { errors: { username: 'not valid username', password: '' } }
    }
    if (!password) {
        return { errors: { username: '', password: 'not valid password' } }
    }

    // 2.call backend api to signup the user
    await createUser(username.toString(), password.toString())

}