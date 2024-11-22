// src/components/AuthProvider.tsx

"use client";

import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

<<<<<<< HEAD
export default AuthProvider
=======
export default AuthProvider
>>>>>>> 2b155c5afbcee29583ea69f63999447c09a3d081
