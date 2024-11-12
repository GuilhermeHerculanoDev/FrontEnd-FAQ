"use client"
import { useEffect, useState } from "react";
import { QuestionsRoute } from "@/app/api/questions/route";
import Image from "next/image";
import Link from "next/link";

type Questions = {
  id: number;
  user: {name:string};
  answers: {
    length: number;
    some(arg0: (answer: any) => any): unknown;users_id:number
};
  title: string;
  description: string;
  date: string;
};

export default function NavBarQuestions(url: any) {
  const [active, setActive] = useState<Record<number, boolean>>({});
    const [activeButton, SetActivebutton] = useState<number | null>(null);
    const [questions, setQuestions] = useState<Questions[]>([]);
    const [filteredQuestions, setFilteredQuestions] = useState<Questions[]>([]);
    let number = (url.value)

    useEffect(() => {
      const getQuestionsData = async () => {
        try {
          const data = await QuestionsRoute(`searchQuestions/${number}`);
          setQuestions(data);
          setFilteredQuestions(data)
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      };
  
      getQuestionsData();
    }, [url]);

    function open(questionId: number) {
      setActive((prev) => ({
        ...prev,
        [questionId]: !prev[questionId],  
      }));
    }

    function button(index:number){
        SetActivebutton(index)
    
        switch(index){
          case 0:
            setFilteredQuestions(questions)
            break
          case 1:
            setFilteredQuestions(
              questions.filter((q) => q.answers.length > 0)
            );
            break
          case 2:
            setFilteredQuestions(
              questions.filter((q) => q.answers.length === 0)
            );
            break
          default:
            setFilteredQuestions(questions)
        }
      }

      return (
        <div className="flex flex-col items-center mb-10 gap-6">

              <div className="flex gap-20 border-b border-b-black content-around w-4/5 justify-between px-4 py-2 mt-16 mb-10">
                <div className="flex gap-8">
                  <button
                    onClick={() => button(0)}
                    className={`font-semibold transform transition duration-300 ${
                      activeButton === 0 ? "font-bold border-b-2 border-black" : ""
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => button(1)}
                    className={`font-semibold transform transition duration-300 ${
                      activeButton === 1 ? "font-bold border-b-2 border-black" : ""
                    }`}
                  >
                    Answered
                  </button>
                  <button
                    onClick={() => button(2)}
                    className={`font-semibold transform transition duration-300 ${
                      activeButton === 2 ? "font-bold border-b-2 border-black" : ""
                    }`}
                  >
                    Unanswered
                  </button>
                </div>
                
                <Link href={`/question/1`}>
                <button className="border border-black p-1 rounded-md hover:bg-blue-600 hover:text-white hover:border-white">
                  create question
                </button>
                </Link>
              </div>

              <div className="flex flex-col items-center gap-4 w-4/5">
                {filteredQuestions.length === 0 ? "Sem perguntas" :
                filteredQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="flex flex-col gap-2.5 p-2 border border-black rounded-md w-full"
                  >
                    <div className="flex justify-between cursor-pointer">
                      <div className="flex gap-2 items-center mb-2 px-2">
                        <Image src={"/profile.png"} alt="Image icon-profile" width={30} height={30} />
                        <h1>{question.user.name}</h1>
                      </div>
                      <button className="px-2" onClick={() => open(question.id)}>
                        <Image src={"/down-arrow.png"} alt="Image icon-down-arrow" width={20} height={18} />
                      </button>
                    </div>

                    <div className="flex justify-between px-2">
                      <p className="font-semibold">{question.title}</p>
                      <p className="font-semibold">{new Date(question.date).toLocaleDateString()}</p>
                    </div>

                    {active[question.id] && (
                      <div className="flex flex-col px-2 gap-4">
                        <p className="text-left mt-2">{question.description}</p>
                        <Link className="self-start" href={`/answer/${question.id}/${number}`}>
                          <button className="px-4 py-1 border rounded-md text-left border-black hover:bg-green-500 hover:text-white hover:border-white">
                            Answer
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

    );
  }
  