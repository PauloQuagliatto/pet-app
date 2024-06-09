import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/app/_components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


const APP_NAME = "MyPet";
const APP_DEFAULT_TITLE = "My Pet";
const APP_TITLE_TEMPLATE = "%s - Pet";
const APP_DESCRIPTION = "App to manage your pets";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#C0C0C0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`font-sans ${inter.variable} bg-gray-300`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
