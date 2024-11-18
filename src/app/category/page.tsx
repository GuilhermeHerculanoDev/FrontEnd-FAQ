import NavBar from "@/components/Utils/NavBar"
import CardsPopularCategory from "@/components/Category/CardsCategory"
import Footer from "@/components/Utils/Footer"

export default function Category(){
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />

            <div className="flex flex-col items-center mt-10 gap-10">
                <h1 className="font-semibold text-4xl">All Categorys</h1>
                <CardsPopularCategory value={100}/>
            </div>

        </div>
    )
}