import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-pm-portfolio-coral-rho.vercel.app"),
  title: { default: "Shravan Kumar | AI Product Manager", template: "%s | Shravan Kumar" },
  description: "AI Product Manager building AI products through product strategy, workflow design, evaluation, analytics, automation, and hands-on delivery.",
  keywords: ["AI Product Manager", "AI Product Management", "Product Management", "AI Products", "Product Strategy", "AI Evaluation", "Product Analytics", "Workflow Automation"],
  openGraph: {
    title: "Shravan Kumar | AI Product Manager",
    description: "Building AI products from real user problems to product strategy, AI workflows, evaluation, and delivery.",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b1713" };

const links = [["About", "/about"], ["Case Studies", "/case-studies"], ["Resume", "/resume"], ["Contact", "/contact"]];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <div className="shell nav">
            <Link className="brand" href="/" aria-label="Shravan Kumar, home">
              <strong>Shravan Kumar</strong><span>AI Product Manager</span>
            </Link>
            <nav className="navlinks" aria-label="Primary navigation">
              {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
          </div>
        </header>
        <main id="main-content">{children}</main>
        <footer className="shell footer">
          <div><strong>Shravan Kumar</strong><span>AI Product Manager</span></div>
          <p>Product strategy · AI evaluation · Evidence-led execution</p>
          <Link href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </footer>
      </body>
    </html>
  );
}
