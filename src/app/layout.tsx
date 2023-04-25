import Provider from "@/components/Providers";
import { Toaster } from "@/components/elements/Toast";
import NavBar from "@/components/layouts/NavBar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(" bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Provider>
          <Toaster position="top-center" />
          {/* @ts-expect-error Server Component */}
          <NavBar />
          {children}
        </Provider>

        {/* for mobile */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
