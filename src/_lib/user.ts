import { redirect } from "next/navigation"
import { hasCookie } from "./session"
import { cache } from "react"
import { cookies } from "next/headers"


export const getUser = cache(async () => {
    // 1. verify user's session
    if (!await hasCookie()) {
        return redirect('/signup')
    }
    // 2. fetch user data based on cookie
    const cookie = cookies().get(process.env.NEXT_PUBLIC_COOKIE_NAME!)?.value
    const verifyUser = await fetch('my-backend-endpoint', { headers: { 'Authorization': `Bearer ${cookie}` } })
    // handle errors and if ok only return the user's nessaccary fileds 
})