import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {}
      },
      async authorize(credentials) {
        if (!credentials){
          return null
        }
        const response = await fetch("http://localhost:3000/auth/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })

        if (response.status !== 200 ){ 
          return null
        }
        const authData = await response.json()

        if (authData.token){
          (await cookies()).set("token", authData.token)
          return authData
        }

        return null
      }
    })

  ],
});


export { handler as GET, handler as POST };
