import NavBarAdmin from "@/components/Admin/NavBarAdmin"
import AdminAllAnswers from "@/components/Admin/AdminAllAnswers"
import VerifyUserAmin from "@/components/Admin/VerifyUserAdmin"

export default function Page() {
    return (
        <div>
            <VerifyUserAmin />

            <NavBarAdmin />

            <AdminAllAnswers />
        </div>
    )
}
