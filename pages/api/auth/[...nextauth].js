import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        redirect: async (url, baseUrl) => {
            return url.startsWith(baseUrl)
                ? Promise.resolve(url)
                : Promise.resolve(baseUrl)
        }
    },
});