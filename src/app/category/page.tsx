import NavBar from "@/components/NavBar"
import CardsPopularCategory from "@/components/CardsPopularCategory"
import Footer from "@/components/Footer"

export default function Category(){
    return (
        <div className="flex flex-col">
            <NavBar />

            <div className="flex flex-col items-center mt-10 gap-10">
                <h1 className="font-semibold text-4xl">All Categorys</h1>
                <CardsPopularCategory />
            </div>

            <Footer />
        </div>
    )
}