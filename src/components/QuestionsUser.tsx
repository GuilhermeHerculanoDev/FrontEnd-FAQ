"use client"

import { fetchClient } from "@/libs/fetchClient";
import { useEffect, useState } from "react";
import Image from "next/image";
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import Link from "next/link";

type Questions = {
    id: number;
    user: {name:string};
    title: string;
    description: string;
    date: string;
}

export default function QuestionsUser(value: any) {
    const [questions, setQuestions] = useState<Questions[]>([]);
    const [token, setToken] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false)
    const [url, setUrl] = useState<string | null>(null);  
    console.log(url)

    useEffect(() =>{
        const tokenFromCookie = Cookies.get('token');
        setToken(tokenFromCookie || null);
        console.log(token)
    }, [])

    useEffect(() => {
        if (token) {
            const decoded = jwt.decode(token);
            const userUrl = decoded?.sub as string; 
            console.log(userUrl)
            setUrl(userUrl)
        }
    }, [token]);

    useEffect(() => {
        if (url) {
            fetchClient(`http://localhost:3000/questions/searchQuestionsUser/${url}`, {
                method: 'GET',
            }).then(async (response) => {
                if (response.status === 200) {
                    const data2 = await response.json();
                    setQuestions(data2);
                }
            });
        }
    }, [url]);

    const respostasExibidas = showAll ? questions : questions.slice(0, 3);


    return (
        <div className="flex flex-col items-center mb-10 gap-6 mt-10">
            {questions.length === 0? (
          <p className="text-center mt-10">Você não tem perguntas</p>
        ): (
            respostasExibidas.map(question => (
            <div key={question.id} className={"flex flex-col gap-2.5 p-2 border border-black rounded-md w-4/5 "}>
                <div className="flex justify-between cursor-pointer">
                    <div className="flex gap-2 items-center mb-2 px-2">
                    <Image src={"/profile.png"} alt="Image icon-profile" width={30} height={30}/>
                    <h1>{question.user.name}</h1>
                    </div>
                    <button className="px-2" >
                    <Image src={"/down-arrow.png"} alt="Image icon-down-arrow" width={"20"} height={"18"}/>
                    </button>
                </div>

                <div className="flex justify-between px-2">
                    <p className="font-semibold">{question.title}</p>
                    <p className="font-semibold">{new Date(question.date).toLocaleDateString()}</p>
                </div>

                <div className="flex flex-col px-2 gap-4 ">
                    <p className="text-left mt-2">{question.description}</p>
                    <Link className="self-start" href={`/answer/${question.id}`}><button className=" px-4 py-1 border rounded-md text-left border-black hover:bg-green-500 hover:text-white hover:border-white">Answer</button></Link>
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
  