import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/layout/PageTransition";
import { fontVariables, poppins } from "@/lib/fonts";
import { SITE_NAME } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | AI Platform`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "AI tools for e-commerce, WhatsApp, email, YouTube, and more. Automate sales, support, and content from one place.",
  metadataBase: new URL("https://zeecom.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} ${poppins.className} overflow-x-hidden antialiased`}>
        <Header />
        <main className="overflow-x-hidden">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
