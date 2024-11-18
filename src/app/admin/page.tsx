import Link from "next/link"
import VerifyUserAmin from "@/components/Admin/VerifyUserAdmin"

export default function Page() {
    return (
        <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-white">
            <VerifyUserAmin />

            <h1 className="text-2xl font-semibold">Deseja entrar como:</h1>

            <div className="flex gap-6">
                <Link href="/" className="px-6 py-2 bg-green-600 text-white rounded">User</Link>
                <Link href="/admin/users" className="px-6 py-2 bg-blue-600 text-white rounded ">Admin</Link>
            </div>
        </div>

    )
}
