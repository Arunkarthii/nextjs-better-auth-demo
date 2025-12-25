"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { LogOut, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Logout() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        try {
            setLoading(true);
            await authClient.signOut();
            router.push("/");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            variant="outline"
            onClick={handleLogout}
            disabled={loading}
            className="flex items-center gap-2"
        >
            {loading ? (
                <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Logging out...
                </>
            ) : (
                <>
                    Logout
                    <LogOut className="h-4 w-4" />
                </>
            )}
        </Button>
    );
}
