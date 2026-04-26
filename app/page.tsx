"use client";

import { SignUpButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  const { userId } = useAuth();
  const isSignedIn = !!userId;

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Secure Your Passwords <br />
          <span className="text-emerald-600">With PassVault</span>
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-500 text-lg">
          Store, manage, and protect your passwords in one safe place.
          Simple, fast, and secure.
        </p>

        <div className="mt-8 flex gap-4">
          {!isSignedIn ? (
            <SignUpButton mode="modal">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2">
                Get Started
              </Button>
            </SignUpButton>
          ) : (
            <Link href="/password">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2">
                Go to Dashboard
              </Button>
            </Link>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16 bg-zinc-50 border-t border-zinc-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Features
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

          <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-600">
              Secure Storage
            </h3>
            <p className="mt-3 text-zinc-500 text-sm">
              Keep your passwords protected using strong security methods.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-600">
              Easy Access
            </h3>
            <p className="mt-3 text-zinc-500 text-sm">
              Access your data anytime with a simple interface.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-600">
              Fast Management
            </h3>
            <p className="mt-3 text-zinc-500 text-sm">
              Add, edit, and delete passwords quickly.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center border-t border-zinc-200">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Start Securing Your Data Today
        </h2>

        <p className="mt-4 text-zinc-500">
          Create your account and manage your passwords easily.
        </p>

        <div className="mt-6">
          {!isSignedIn && (
            <SignUpButton mode="modal">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2">
                Create Account
              </Button>
            </SignUpButton>
          )}
        </div>
      </section>

    </main>
  );
}