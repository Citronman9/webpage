<<<<<<< HEAD
// src\app\api\auth\[...netxauth]\route.ts
=======
// src\app\api\auth\[...nextauth]\route.ts

>>>>>>> 2b155c5afbcee29583ea69f63999447c09a3d081

import NextAuth from "next-auth";
import { authOptions } from "./authOptions";


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };