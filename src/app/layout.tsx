import { siteConfig } from "@/config//site";
import { cn } from "@/utils/cn";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Navbar from "@/components/NavBar";
import ReactQueryPvorider from "@/providers/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" from-indigo-950 to-gray-900 bg-gradient-to-tr h-[100vh]">
        <ReactQueryPvorider>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryPvorider>
      </body>
    </html>
  );
}
