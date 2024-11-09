"use client"
import { useEffect, useState } from "react";
import { fetchClient } from "@/libs/fetchClient";
import Image from "next/image";
import Link from "next/link";

type Answer = {
  id: number;
  user:{name:string};
  answer: string;
  date: string;
};


export default function CardsAnswers(value: any) {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showAll, setShowAll] = useState(false)
  let url = value.value
  console.log(value.value)

  useEffect(() => {
      fetchClient(`http://localhost:3000/answers/searchAnswers/${url}`, {
          method: 'GET',
      }).then(async (response) => {
          if (response.status === 200) {
              const data = await response.json();
              console.log(data); 
              setAnswers(data);
          }
      });
  }, []);

  const respostasExibidas = showAll ? answers : answers.slice(0, 3);

  console.log(answers)


    return (
      <div className="flex flex-col mb-10 mt-10 gap-6">

        <div className="flex items-center justify-center mt-20 space-x-4 gap-14">
          <h1 className="text-2xl font-semibold">Respostas({answers.length})</h1>
          <div className="w-3/5 h-px bg-[#262626]"></div>
        </div>

        {answers.length === 0? (
          <p className="text-center mt-10">Não existe resposta para essa pergunta</p>
        ): (

          respostasExibidas.map((answer) => (
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