import { Logout } from "@/components/logout";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-black">
            <div className="w-full flex flex-col items-center justify-center max-w-md rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-zinc-900">

                <h1 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                    Dashboard
                </h1>

                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    You are successfully logged in. This is a protected page accessible
                    only after authentication.
                </p>

                <Logout />
            </div>
        </div>
    );
}
