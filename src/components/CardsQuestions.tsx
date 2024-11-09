"use client"
import { useEffect, useState } from "react";
import { fetchClient } from "@/libs/fetchClient";
import Image from "next/image";
import Link from "next/link";

type Questions = {
  id: number;
  user: {name:string};
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

  

  function open(questionId: number) {
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
              <Image src={"/profile.png"} alt="Image icon-profile" width={"30"} height={"30"}/>
              <h1>{question.user.name}</h1>
            </div>
            <button className="px-2" onClick={() => open(question.id)}>
              <Image src={"/down-arrow.png"} alt="Image icon-down-arrow" width={"20"} height={"18"}/>
            </button>
          </div>

          <div className="flex justify-between px-2">
            <p className="font-semibold">{question.title}</p>
            <p className="font-semibold">{new Date(question.date).toLocaleDateString()}</p>
          </div>

          { active[question.id] &&
          <div className="flex flex-col px-2 gap-4 ">
            <p className="text-left mt-2">{question.description}</p>
            <Link className="self-start" href={`/answer/${question.id}`}><button className=" px-4 py-1 border rounded-md text-left border-black hover:bg-green-500 hover:text-white hover:border-white">Answer</button></Link>
          </div>
          }

        </div>
      ))}
      </div>
    );
  }