"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { getquestion } from "@/app/api/questions/getquestion";


type Questions = {
  id: number;
  user: {name:string};
  title: string;
  description: string;
  date: string;
};

export default function Question (value: any)  {
  const [question, setQuestion] = useState<Questions | null>(null)
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getquestion(value.value);
        setQuestion(response || null);
      } catch (error) {
        console.error("Erro ao carregar pergunta:", error);
      } 
    }
    fetchQuestions();
}, []);

  return (
    
    <div className={"flex flex-col gap-2.5 p-2 border border-black rounded-md w-10/12 "}>
        <div className="flex justify-between cursor-pointer">
            <div className="flex gap-2 items-center mb-2 px-2">
              <Image src={"/profile.png"} alt="Image icon-profile" width={"35"} height={"35"}/>
              <h1 className="text-lg font-semibold">{question?.user.name}</h1>
            </div>
            <p className="font-semibold px-2 text-lg">{question?.date ? new Date(question?.date).toLocaleDateString() : ''}</p>
        </div>

        <div className="flex justify-between px-2">
            <p className="font-semibold text-lg">{question?.title}</p>
        </div>

        <div className="flex flex-col gap-4 ">
            <p className="text-left px-2 mt-2 text-lg">{question?.description}</p>
        </div>
    </div>
  )
};

