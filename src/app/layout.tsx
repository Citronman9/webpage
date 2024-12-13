// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import BasicMenu from "../components/menu"; // Replace NavBar import with BasicMenu
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Render the BasicMenu component at the top */}
             
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
            <BasicMenu />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
