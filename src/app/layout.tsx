import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sayon | Computer Science & Full-Stack Developer",
  description:
    "Personal portfolio of Sayon — Computer Science and Engineering (Data Science) student at Brainware University. Focused on modern web development, React, Next.js, data structures, and core software engineering.",
  keywords: [
    "Sayon",
    "Portfolio",
    "Computer Science",
    "Brainware University",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Data Structures",
    "Kolkata",
  ],
  authors: [{ name: "Sayon" }],
  creator: "Sayon",
  openGraph: {
    title: "Sayon | Computer Science & Full-Stack Developer",
    description:
      "B.Tech Computer Science and Engineering (Data Science) student at Brainware University. Focused on modern full-stack web applications and CS fundamentals.",
    url: "https://sayon.dev",
    siteName: "Sayon Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayon | Computer Science & Full-Stack Developer",
    description:
      "Computer Science & Engineering student at Brainware University. Building modern web applications and strengthening core CS fundamentals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090a0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#fafafc] text-zinc-900 dark:bg-[#090a0f] dark:text-[#f4f4f6] font-sans antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
