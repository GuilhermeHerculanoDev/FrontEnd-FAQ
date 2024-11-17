import NavBar from "@/components/NavBar"
import AllQuestions from "@/components/AllQuestions"

export default function Page() {
    return (
        <div>
           <NavBar />

           <h1 className="text-4xl text-center mt-20 mb-20 font-semibold">All Questions</h1>

           <AllQuestions />
        </div>
    )
}
