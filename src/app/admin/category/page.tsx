import NavBarAdmin from "@/components/Admin/NavBarAdmin"
import AdminAllCategories from "@/components/Admin/AdminAllCategories"
import VerifyUserAmin from "@/components/Admin/VerifyUserAdmin"

export default function Page() {
    return (
        <div>
            <VerifyUserAmin />

            <NavBarAdmin />

            <AdminAllCategories />
        </div>
    )
}
