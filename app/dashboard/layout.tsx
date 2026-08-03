import { Suspense } from "react"
import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Loader2 } from "lucide-react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Suspense
            fallback={
                <div className="flex h-screen items-center justify-center bg-black text-white">
                    <Loader2 className="h-8 w-8 animate-spin text-white" />
                </div>
            }
        >
            <DashboardShell>{children}</DashboardShell>
        </Suspense>
    )
}
