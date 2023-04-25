import { getServerSession } from "next-auth";
import Link from "next/link";
import { FC } from "react";
import { ButtonVariants } from "@/components/elements/Button";
import SignInButton from "@/components/layouts/SignInButton";
import SignOutButton from "@/components/layouts/SignOutButton";
import ThemeToggler from "../ThemeToggler";
import { authOptions } from "@/lib/auth";

interface NavBarProps {}

const NavBar = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 ring-0 pt-3 pb-2 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={ButtonVariants({ variant: "link" })}>
          ApiHub
        </Link>

        <div className="md:hidden"><ThemeToggler /></div>

        <div className="hidden md:flex gap-4">
          <ThemeToggler />
          <Link
            href="/documentation"
            className={ButtonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                href="/dashboard"
                className={ButtonVariants({ variant: "ghost" })}
              >
                Documentation
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
