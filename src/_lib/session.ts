import 'server-only'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const createUser = async (username: string, password: string) => {
    // fetch function with username/password
    // it returns a token, store it (and handle errors)

    const cookieName = 'session'
    const cookieValue = 'this token comes from backend api'

    cookies().set(cookieName, cookieValue, { httpOnly: true, secure: true, sameSite: 'lax', path: '/', expires: new Date(Date.now() + 24 * 60 * 60 * 1000) })
    return redirect('/dashboard')
}

export const hasCookie = async () => {
    const cookie = cookies().get(process.env.NEXT_PUBLIC_COOKIE_NAME!)?.value
    return Boolean(cookie)
}

export const deleteSession = async () => {
    cookies().delete(process.env.NEXT_PUBLIC_COOKIE_NAME!)
    return redirect('/signup')
}