import "./globals.css";
import { GeistSans, GeistMono } from "geist/font";
import ChatWidget from "@/components/ChatWidget";

export const metadata = {
  title: "Orphanage Foundation",
  description: "Bringing Hope to Orphans & Vulnerable Children",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ChatWidget />
        {children}
      </body>
    </html>
  );
}
