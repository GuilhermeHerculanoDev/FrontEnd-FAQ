"use client"
import { useEffect, useState } from "react";
import { getanswersquestions } from "@/app/api/answers/getanswersquestion";
import Image from "next/image";
import TextEdit from "./TextEditor";


export default function CardsAnswers(value: any) {
  const [answers, setAnswers] = useState<[]>([]);
  const [showAll, setShowAll] = useState(false)
  let url = value.value

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getanswersquestions(url);
        setAnswers(response || []);
      } catch (error) {
        console.error("Erro ao carregar respostas:", error);
      } 
    }
    fetchQuestions();
}, []);

  const respostasExibidas = showAll ? answers : answers.slice(0, 3);

    return (
      <div className="flex flex-col mb-10 mt-10 gap-6">

        <div className="flex items-center justify-center mt-20 space-x-4 gap-14">
          <h1 className="text-2xl font-semibold">Respostas({answers.length})</h1>
          <div className="w-3/5 h-px bg-[#262626]"></div>
        </div>

        <TextEdit value={url} />

        {answers.length === 0? (
          <p className="text-center mt-10">Não existe resposta para essa pergunta</p>
        ): (

          respostasExibidas.map((answer:any) => (
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

        {answers.length > 3 && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md mx-auto"
                >
                  Ver mais respostas
                </button>
              )}

      </div>
    );
  }