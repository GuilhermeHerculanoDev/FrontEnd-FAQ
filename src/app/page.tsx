import Navbar from '@/components/Utils/NavBar';
import Image from 'next/image';
import Footer from '@/components/Utils/Footer';
import CardsPopularCategory from "@/components/Category/CardsCategory";
import PupularQuestions from "@/components/Questions/PopularQuestions";

export default async function Home() {

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] h-auto text-white m-0 mt-10 mb-20 pt-0">
        <div className="flex flex-col justify-center gap-6 p-0"> 
          <h2 className="text-6xl font-semibold text-black text-left text-center">Frequently Asked Questions</h2>
          <p className="text-lg text-center text-gray-600">Questions from the technology area</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src="/ImgHome.png" alt="Home Image" width={500} height={400} />
        </div>
      </div>

      <div className="flex flex-col items-center mt-20 gap-2">
        <h1 className="font-bold">Popular Categories</h1>
        <CardsPopularCategory value={6}/>
      </div>

      <div className="w-4/5 h-px bg-[#262626] mx-auto mt-40 mb-40"></div>

      <div className="flex flex-col items-center  mb-20 gap-8">
        <h1 className="font-bold">Popular Questions</h1>
        <PupularQuestions />
      </div>

      <Footer/>

    </div>
  );
}
