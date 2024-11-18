import NavBarAdmin from "@/components/Admin/NavBarAdmin"
import AdminAllUsers from "@/components/Admin/AdminAllUsers"
import VerifyUserAmin from "@/components/Admin/VerifyUserAdmin"

export default function Page() {
    return (
        <div>
            
            <VerifyUserAmin />

            <NavBarAdmin />

            <AdminAllUsers />
        </div>
    )
}
