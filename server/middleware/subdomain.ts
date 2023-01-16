export default defineEventHandler(({ req, res, context }) => {
    const hostname = req.headers.host || "ricardoaguiar.com"

    const mainDomain = ["localhost:3000", "ricardoaguiar.com"]

    if (!mainDomain.includes(hostname)) {
        const currentHost =
            process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
                ? hostname.replace(`.ricardoaguiar.com`, "")
                : hostname.replace(`.localhost:3000`, "")

        console.log({ currentHost })
        context.subdomain = currentHost
    }
})