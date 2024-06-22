import { hasCookie } from "@/_lib/session";
import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
    // 1. check if route is protected
    const protectedRoutes = ['/dashboard']
    const currentPath = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(currentPath)

    // 2. check for valid session
    if (isProtectedRoute) {
        if (!await hasCookie()) {
            return NextResponse.redirect(new URL('signup', req.nextUrl))
        }
    }
    return NextResponse.next()
}

// middleware should *not* run on

export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',] }
export default middleware