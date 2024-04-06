import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "../../config/site";
import { Poppins } from "next/font/google";
import { Providers } from "./redux/provider";
import AuthProvider from "./context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/apple2.png",
      href: "/apple2.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable}`}>
        <AuthProvider>
          <Providers>
            <Toaster />
            <div>{children}</div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
