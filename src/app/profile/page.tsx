import NavBar from "@/components/NavBar"
import Image from "next/image"
import InfoUsers from "@/components/InfoUsers"
import QuestionsUser from "@/components/QuestionsUser"
import AnswersUser from "@/components/AnswersUser"
import Footer from "@/components/Footer"
  
export default function PageProfile ()  {

    return (
        <div className="flex flex-col ">
            <NavBar />

            <div className="flex flex-col items-center justify-center mt-10">
                <Image src={"/profile.png"} alt="Image Profile User" width={100} height={100} />
                <InfoUsers />
            </div>

            <div className="flex items-center justify-center mt-20 space-x-4 gap-12">
                <h1 className="text-2xl font-semibold">Perguntas Feitas</h1>
                <div className="w-3/5 h-px bg-[#262626]"></div>
            </div>

            <QuestionsUser />

            <div className="flex items-center justify-center mt-20 space-x-4 gap-12">
                <div className="w-3/5 h-px bg-[#262626]"></div>
                <h1 className="text-2xl font-semibold">Respostas Dadas</h1>
            </div>


            <AnswersUser />


            <Footer />
        </div>
    )
}