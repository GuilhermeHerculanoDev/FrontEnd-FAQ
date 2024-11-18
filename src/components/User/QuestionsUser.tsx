"use client"

import { useEffect, useState } from "react";
import { getquestionuser } from "@/app/api/questions/getquestionuser";
import EditDeleteControls from "../Utils/EditDeleteQuestions";
import Image from "next/image";
import Link from "next/link";
import useUserUrl from "@/libs/useUserUrl";

export default function QuestionsUser(value: any) {
    const idUser = useUserUrl()
    const [questions, setQuestions] = useState<[]>([]);
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await getquestionuser(idUser);
            setQuestions(response || []);
          } catch (error) {
            console.error("Erro ao carregar as perguntas do usúario:", error);
          } 
        }
        fetchQuestions();
    }, [idUser]);

    const respostasExibidas = showAll ? questions : questions.slice(0, 3);

    return (
        <div className="flex flex-col items-center mb-10 gap-6 mt-10">
            {questions.length === 0? (
          <p className="text-center mt-10">Você não tem perguntas</p>
        ): (
            respostasExibidas.map((question:any) => (
            <div key={question.id} className={"flex flex-col gap-1 p-2 border border-black rounded-md w-4/5 "}>
                <div className="flex justify-between cursor-pointer">
                    <div className="flex gap-2 items-center mb-2 px-2">
                    <Image src={"/profile.png"} alt="Image icon-profile" width={30} height={30}/>
                    <h1>{question.user.name}</h1>
                    </div>
                    <p className="font-semibold px-2">{new Date(question.date).toLocaleDateString()}</p>
                </div>

                <div className="flex justify-between px-2">
                <Link className="font-semibold" href={`/answer/${question.id}}`}>{question.title}</Link>
                    <p className="font-semibold ">{question.category.category_name}</p>
                </div>

                <div className="flex flex-col px-2 gap-4 ">
                    <p className="text-left mt-2">{question.description}</p>
                </div>

                <div className="flex justify-start px-2 gap-2 mt-2 mb-1">
                    <EditDeleteControls value={question.id} />
                </div>
            </div>
            )))|| "Você não tem perguntas"}

            {questions.length > 3 && !showAll && (
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
  