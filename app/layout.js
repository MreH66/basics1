import { Inter } from "next/font/google";
import "./globals.css";

import c from "@/app/layout.module.css";

import Dropdown from "@/components/links";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={c.header}>
          <h1 className={c.mainH}>
            <Link className={c.mainLink} href={"/"}>
              <span className={c.span1}>Dakar rally</span>
              <span className={c.span1}>pinnacle of rallying</span>
            </Link>
          </h1>
          <Dropdown />
        </header>
        {children}
      </body>
    </html>
  );
}
