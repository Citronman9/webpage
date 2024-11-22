<<<<<<< HEAD
// src\app\api\auth\[...netxauth]\authOptions.ts
=======

// src/app/api/auth/[...nextauth]/authOptions.ts
>>>>>>> 2b155c5afbcee29583ea69f63999447c09a3d081

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

<<<<<<< HEAD

=======
>>>>>>> 2b155c5afbcee29583ea69f63999447c09a3d081
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/prihlasenie',
    signOut: '/auth/odhlasenie',
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Redirect to home page after sign-in
      return baseUrl || url; // baseUrl is automatically set from NEXTAUTH_URL in .env
    },
  },
<<<<<<< HEAD
};
=======
};



>>>>>>> 2b155c5afbcee29583ea69f63999447c09a3d081
