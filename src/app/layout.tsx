import { Toaster } from "react-hot-toast";
import "./globals.css";
import ReactQueryPvorider from "@/providers/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { Metadata } from "next";

const IranSansWeb = localFont({
  src: "../../public/fonts/teqh_iransansweb.ttf",
  variable: "--font-IranSansWeb",
});

export const metadata: Metadata = {
  title: "blog-project",
  description: "a blog project that renders many post and show its detials",
  openGraph: {
    title: "blog-project",
    description: "a blog project that renders many post and show its detials",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${IranSansWeb.variable} from-indigo-950 to-gray-900 bg-gradient-to-tr h-[100vh]`}
        >
          <ReactQueryPvorider>
            {children}
            <Toaster position="top-center" reverseOrder={false} />
            <ReactQueryDevtools initialIsOpen={false} />
          </ReactQueryPvorider>
        </body>
      </html>
    </ClerkProvider>
  );
}
