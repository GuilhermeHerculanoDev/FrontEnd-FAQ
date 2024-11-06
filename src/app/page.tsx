import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from '@/components/NavBar';
import Image from 'next/image';
import Footer from "@/components/Footer";
import CardsCategory from "@/components/CardsCategory";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

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

      <div className="flex flex-col items-center mt-20 gap-8">
        <h1 className="font-bold">Popular Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-bold mt-20">
          <CardsCategory />
          <CardsCategory />
          <CardsCategory />
        </div>
      </div>

      <Footer/>

    </div>
  );
}
