"use client"
import { useEffect, useState } from "react";
import { getuser } from "@/app/api/users/getuser";
import Link from "next/link";
import useUserUrl from "@/libs/useUserUrl";

type InfoUsers = {
    id: number;
    name: string;
    email: string;
    telephone: string;
    description: string;
}

export default function InfoUsers( value: any) {
    const idUser = useUserUrl()
    const [infoUser, setInfoUser] = useState<InfoUsers| null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await getuser(idUser);
            setInfoUser(response );
          } catch (error) {
            console.error("Erro ao carregar Perguntas:", error);
          } 
        }
        fetchQuestions();
    }, [idUser]);
    

    return (
      <div className="flex flex-col justify-center items-center gap-10">
        <div className=" flex flex-col text-center gap-2 mt-4">
            <p>{infoUser?.name}</p>
            <p>{infoUser?.description}</p>
        </div>
        <div className="flex gap-40 mt-6">
            <div className="flex flex-col">
                <p className="font-semibold">Email:</p>
                <p>{infoUser?.email}</p>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold">Telefone:</p>
                <p>{infoUser?.telephone}</p>
            </div>
        </div>

        <Link href={`profile/${infoUser?.id}`} 
        className="mt-2 w-[100px] h-[25px] bg-[#2C73EB] border border-[#2C73EB] rounded-md text-white outline-none cursor-pointer flex items-center justify-center"
        >
            Edit
        </Link>
      </div>
    );
  }
  