"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react"

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem attribute="class">
      <SessionProvider>
      {children}
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Provider;
