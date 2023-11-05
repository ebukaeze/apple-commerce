import "./globals.css";
import type { Metadata } from "next";
import type { AppProps } from "next/app";
import { Inter, Poppins, Lora } from "next/font/google";
import { Providers } from "./redux/provider";
import AuthProvider from "./context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const poppinsFont = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Apple redesign",
  description: "Get the latest apple technologies",
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
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
