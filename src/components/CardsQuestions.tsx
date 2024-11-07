"use client"
import { useEffect, useState } from "react";
import { fetchClient } from "@/libs/fetchClient";
import Image from "next/image";
import Link from "next/link";

type Questions = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export default function CardsQuestions(value: any) {
  const [active, setActive] = useState<Record<number, boolean>>({});
  const [questions, setQuestions] = useState<Questions[]>([]);
  let url = value.value
  console.log(value.value)

  useEffect(() => {
      fetchClient(`http://localhost:3000/questions/searchQuestions/${url}`, {
          method: 'GET',
      }).then(async (response) => {
          if (response.status === 200) {
              const data = await response.json();
              console.log(data); 
              setQuestions(data);
          }
      });
  }, []);

  function ativar(questionId: number) {
    setActive((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],  
    }));
  }
  

    return (
      <div className="flex flex-col items-center mb-10 gap-6">
        {questions.map(question => (
        <div key={question.id} className={"flex flex-col gap-2.5 p-2 border border-black rounded-md w-4/5 "}>
          <div className="flex justify-between cursor-pointer">
            <div className="flex gap-2 items-center mb-2 px-2">
              <Image src={"/icons/profile.png"} alt="Image icon-profile" width={"30"} height={"30"}/>
              <h1>usuario</h1>
            </div>
            <button onClick={() => ativar(question.id)}>
              <Image src={"/icons/down-arrow.png"} alt="Image icon-down-arrow" width={"30"} height={"18"}/>
            </button>
          </div>

          <div className="flex justify-between px-2">
            <p className="font-bold">{question.title}</p>
            <p className="font-bold">{new Date(question.date).toLocaleDateString()}</p>
          </div>

          { active[question.id] &&
          <div className="flex flex-col gap-4 ">
            <p className="text-left px-2 mt-2">{question.description}</p>
            <button className="self-start px-4 py-1 border rounded-md text-left border-[rgba(0, 0, 0, 0.5)] hover:bg-green-500">Answer</button>
          </div>
          }

        </div>
      ))}
      </div>
    );
  }