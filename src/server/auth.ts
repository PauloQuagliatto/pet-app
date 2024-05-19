import NextAuth, { type DefaultSession } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import bcrypt from "bcrypt";

import { env } from "@/env";
import { db } from "@/server/db";
import { users } from "./db/tables";
import { eq } from "drizzle-orm";
import { loginSchema } from "@/schemas/loginSchema";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    session: ({ session, token, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user ? user.id : token.sub,
        },
      }
    },
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { email, password } = loginSchema.parse(credentials);
        const [user] = await db.select().from(users).where(eq(users.email, email));

        if (!user ?? !user?.password) return null;

        await bcrypt.compare(password, user.password);

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          emailVerified: user.emailVerified
        };
      }
    })
  ],
  adapter: DrizzleAdapter(db),
  session: {
    strategy: 'jwt'
  }
})
