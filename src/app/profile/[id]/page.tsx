import NavBar from "@/components/NavBar"
import Image from "next/image"
import FormEditInfoUsers from "@/components/FormEditInfoUsers"
import QuestionsUser from "@/components/QuestionsUser"
import AnswersUser from "@/components/AnswersUser"
import Footer from "@/components/Footer"

interface ProfileProps {
    params: {
      id: string;
      category_name: string;
    };
  }
  
export default async function PageCategory ({ params }: ProfileProps)  {
    const { id, category_name } = await params;

    return (
      <div className="flex flex-col ">
      <NavBar />

      <div className="flex flex-col items-center justify-center mt-10">
          <Image src={"/profile.png"} alt="Image Profile User" width={100} height={100} />
          <FormEditInfoUsers value={id}/>
      </div>

      </div>
    )
}