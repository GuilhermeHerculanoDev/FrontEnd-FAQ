import NavBarAdmin from "@/components/Admin/NavBarAdmin"
import AdminAllQuestions from "@/components/Admin/AdminAllQuestions"
import VerifyUserAmin from "@/components/Admin/VerifyUserAdmin"

export default function Page() {
    return (
        <div>
            <VerifyUserAmin />

            <NavBarAdmin />

            <AdminAllQuestions />
        </div>
    )
}
