import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shravan Kumar | AI Product Manager",
  description: "AI Product Management portfolio, case studies, frameworks, and learning journey through Day 33.",
};

const links = [
  ["About", "/about"],
  ["Case Studies", "/case-studies"],
  ["Resume", "/resume"],
  ["Contact", "/contact"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="shell nav">
          <Link className="brand" href="/">Shravan<span>.</span></Link>
          <nav className="navlinks" aria-label="Primary navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="shell footer">
          <span>© 2026 Shravan Kumar</span>
          <span>AI PM portfolio · Built with Next.js</span>
        </footer>
      </body>
    </html>
  );
}
