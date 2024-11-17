"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import useUserUrl from "@/libs/useUserUrl";
import { getanswersusers } from "@/app/api/answers/getanswersusers";

export default function AnswersUser() {
    const api = useUserUrl()
    console.log(api)
    const [answers, SetAnswers] = useState<[]>([]);

    
    useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const response = await getanswersusers(api);
          SetAnswers(response || []);
        } catch (error) {
          console.error("Erro ao carregar perguntas:", error);
        } 
      }
      fetchQuestions();
  }, [api]);

    console.log(answers)
    return (
        <div className="flex flex-col mb-10 mt-10 gap-6">

        {answers.length === 0? (
          <p className="text-center mt-10">Você não respondeu nenhuma pergunta</p>
        ): (

          answers.map((answer:any) => (
        <div key={answer.id} className="flex flex-col gap-2.5 p-2 border border-black rounded-md w-4/5 mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center mb-2 px-2">
              <Image src={"/profile.png"} alt="Image icon-profile" width={30} height={30} />
              <h1 className="font-semibold">{answer.user.name}</h1>
            </div>
            <p className="font-semibold px-2">{new Date(answer.date).toLocaleDateString()}</p>
          </div>

          <p className="px-2">{answer.answer}</p>

          <div className="flex px-2 gap-4 mt-2 mb-2 ">
            <button>
              <Image src={"/icon-like.png"} alt="Image icon-like" width={18} height={18} />
            </button>
            <button className="rotate-180">
              <Image src={"/icon-like.png"} alt="Image icon-like" width={18} height={18} />
            </button>
          </div>
        </div>
      )))|| "Não existe resposta para essa pergunta"}

      </div>
    );
  }
  