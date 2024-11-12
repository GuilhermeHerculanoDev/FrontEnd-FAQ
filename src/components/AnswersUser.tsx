"use client"

import { fetchClient } from "@/libs/fetchClient";
import { useEffect, useState } from "react";
import Image from "next/image";
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import Link from "next/link";

type Answers = {
    id: number;
    user:{name:string};
    answer: string;
    date: string;
  };

export default function AnswersUser(value: any) {
    const [answers, SetAnswers] = useState<Answers[]>([]);
    const [token, setToken] = useState<string | null>(null);
    const [url, setUrl] = useState<string | null>(null);  

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
      if(url){
        fetchClient(`http://localhost:3000/answers/searchAnswers/${url}`, {
            method: 'GET',
        }).then(async (response) => {
            if (response.status === 200) {
                const data2 = await response.json();
                console.log(data2); 
                SetAnswers(data2);
            }
        });
      }
    }, []);

    return (
        <div className="flex flex-col mb-10 mt-10 gap-6">

        {answers.length === 0? (
          <p className="text-center mt-10">Você não respondeu nenhuma pergunta</p>
        ): (

          answers.map((answer) => (
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
  