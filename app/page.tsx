import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-lg dark:bg-zinc-900">
        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">
          Welcome to Better Auth Demo
        </h1>

        {/* Description */}
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Secure authentication with Next.js, Better Auth, Neon DB, and shadcn UI.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-4">
          <Link href="/login">
            <Button className="w-full">Login</Button>
          </Link>

          <Link href="/signup">
            <Button variant="outline" className="w-full">
              Sign up
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
