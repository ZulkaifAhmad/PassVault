"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Passwords", href: "/password" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { userId } = useAuth();
  const isSignedIn = !!userId;

  return (
    <header className="sticky top-0 z-50 h-15 w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">

        <Link href="/" className="text-lg font-semibold  tracking-tight">
          PassVault
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm transition-colors",
                  active
                    ? "text-green-700"
                    : "text-zinc-400 hover:text-gray-900"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {!isSignedIn && (
            <>
              {/* Sign In */}
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="hidden md:flex text-zinc-500 hover:text-black cursor-pointer"
                >
                  Sign In
                </Button>
              </SignInButton>

              {/* Sign Up */}
              <SignUpButton mode="modal">
                <Button className="hidden cursor-pointer md:flex bg-emerald-600 hover:bg-emerald-500 text-white">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}

          {/* User Profile */}
          {isSignedIn && <UserButton />}

          {/* Mobile Menu */}

          
          <Sheet open={open}  onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden bg-white text-zinc-300">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white p-10 border-zinc-800">
              <div className="flex flex-col gap-4 mt-6">

                {/* Links */}
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-gray-900 hover:text-black text-sm"
                  >
                    {label}
                  </Link>
                ))}

                {/* Auth Buttons */}
                {!isSignedIn && (
                  <>
                    <SignInButton mode="modal">
                      <Button
                        onClick={() => setOpen(false)}
                        variant="outline"
                        className="w-full border-zinc-700 text-zinc-300"
                      >
                        Sign In
                      </Button>
                    </SignInButton>

                    <SignUpButton mode="modal">
                      <Button
                        onClick={() => setOpen(false)}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white"
                      >
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </>
                )}

                {/* User */}
                {isSignedIn && (
                  <div className="mt-4">
                    <UserButton />
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}