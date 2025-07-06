import type { Metadata } from "next";
import { Noto_Sans} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import SyncUserWithConvex from "@/components/SyncUsersWithConvex";

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Zubid",
  description: "Your Trusted Car Bidding Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          className={`${noto.variable} antialiased`}
          >
            <ConvexClientProvider>
          <ClerkProvider>

              <Header/>
                <SyncUserWithConvex/>
                {children}
          </ClerkProvider>
            </ConvexClientProvider>
        </body>
      </html>
  );
}
