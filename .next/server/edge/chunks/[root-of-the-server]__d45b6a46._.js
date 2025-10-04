(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__d45b6a46._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/lib/data/users.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "USERS": (()=>USERS)
});
const USERS = [
    {
        id: '1',
        name: 'Sehajdeep',
        email: 'sehajdeep@unicube.com',
        role: 'admin',
        avatarUrl: 'https://picsum.photos/seed/avatar1/100/100'
    },
    {
        id: '2',
        name: 'Naitik Beri',
        email: 'naitik@unicube.com',
        role: 'employee',
        avatarUrl: 'https://picsum.photos/seed/avatar2/100/100'
    },
    {
        id: '3',
        name: 'Arjun Sharma',
        email: 'arjun@unicube.com',
        role: 'employee',
        avatarUrl: 'https://picsum.photos/seed/avatar3/100/100'
    }
];
}}),
"[project]/src/lib/auth.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createSession": (()=>createSession),
    "deleteSession": (()=>deleteSession),
    "getSession": (()=>getSession),
    "getUser": (()=>getUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$users$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/users.ts [middleware-edge] (ecmascript)");
'use server';
;
;
;
// This would be in an environment variable in a real application
const SECRET_KEY = process.env.SESSION_SECRET || 'your-secret-key-for-development-only-change-in-prod';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
// For simplicity in this scaffold, we're using a basic object.
// In a real app, you would use a library like `jose` for robust JWTs.
async function encrypt(payload) {
    // This is a placeholder for actual encryption
    return JSON.stringify(payload);
}
async function decrypt(session) {
    try {
        // This is a placeholder for actual decryption
        const payload = JSON.parse(session);
        // Very basic validation
        if (payload.userId && payload.expiresAt) {
            return {
                ...payload,
                expiresAt: new Date(payload.expiresAt)
            };
        }
        return null;
    } catch (error) {
        return null;
    }
}
async function createSession(userId) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    const session = await encrypt({
        userId,
        expiresAt
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])().set('session', session, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    });
}
async function getSession() {
    const sessionCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])().get('session')?.value;
    if (!sessionCookie) return null;
    const session = await decrypt(sessionCookie);
    if (!session || new Date() > session.expiresAt) {
        return null;
    }
    return session;
}
async function getUser() {
    const session = await getSession();
    if (!session) return null;
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$users$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERS"].find((u)=>u.id === session.userId);
    return user || null;
}
async function deleteSession() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])().delete('session');
}
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$users$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/users.ts [middleware-edge] (ecmascript)");
;
;
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSession"])();
    const publicRoutes = [
        '/'
    ];
    const isPublicRoute = publicRoutes.includes(pathname);
    const adminRoutes = [
        '/dashboard',
        '/attendance',
        '/goals'
    ];
    if (session) {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$users$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["USERS"].find((u)=>u.id === session.userId);
        // If logged in and on a public route (like login page), redirect to dashboard/my-requests
        if (isPublicRoute) {
            const url = user?.role === 'admin' ? '/dashboard' : '/my-requests';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(url, request.url));
        }
        // Prevent employees from accessing admin routes
        if (adminRoutes.some((p)=>pathname.startsWith(p)) && user?.role !== 'admin') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/my-requests', request.url));
        }
    } else {
        // If not logged in and not on a public route, redirect to login
        if (!isPublicRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url));
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */ '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__d45b6a46._.js.map