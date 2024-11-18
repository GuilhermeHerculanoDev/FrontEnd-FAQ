import NavBar from "@/components/Utils/NavBar"
import Image from "next/image"
import InfoUsers from "@/components/User/InfoUsers"
import QuestionsUser from "@/components/User/QuestionsUser"
import AnswersUser from "@/components/User/AnswersUser"
import Footer from "@/components/Utils/Footer"
import UserNotLogged from "@/components/User/UserNotLogged";
import SingOut from "@/components/Utils/SingOut"
  
export default function PageProfile ()  {

    return (
        <div className="flex flex-col ">
            <NavBar />

            <UserNotLogged />

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

            <div className="flex justify-center mt-20 mb-10">
                <SingOut />
            </div>

            <Footer />
        </div>
    )
}