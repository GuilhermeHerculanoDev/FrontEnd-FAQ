import NavBar from "@/components/Utils/NavBar"
import AllQuestions from "@/components/Questions/AllQuestions"

export default function Page() {
    return (
        <div>
           <NavBar />

           <h1 className="text-4xl text-center mt-20 mb-20 font-semibold">All Questions</h1>

           <AllQuestions />
        </div>
    )
}
