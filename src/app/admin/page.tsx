import Link from "next/link"
import VerifyUserAmin from "@/components/Admin/VerifyUserAdmin"

export default function Page() {
    return (
        <div className=" flex flex-col gap-4 justify-center items-center min-h-screen">
            <VerifyUserAmin />

            <h1>Deseja logar como </h1>
            <div className="flex gap-8">
                <Link href={"/admin/users"} className="border p-1">
                    Admin
                </Link>
                <Link href={"/"} className="border p-1">
                    User
                </Link>
            </div>
        </div>
    )
}
