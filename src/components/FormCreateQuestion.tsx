"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { createquestion } from "@/app/api/questions/createquestion";

export default function FormCreateQuestion({ value }: { value: any }) {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const number = value;
  const numberCategory = parseInt(number)

  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    setToken(tokenFromCookie || null);
  }, []);

  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token);
      console.log(decoded)
      const userUrl = decoded?.sub as string;
      console.log(userUrl)
      setUrl(userUrl);
    }
  }, [token]);

  async function createQuestion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      users_id: url,
      category_id: numberCategory,
      title: formData.get("InputTitle"),
      description: formData.get("InputDescription"),
    };

    try {
      const responseMessage = await createquestion(data);
      if (responseMessage) {
        alert("Pergunta criada com sucesso")
        router.back();
      }
    } catch (error) {
      console.error("Erro ao criar questão:", error);
      setError(true);
    }
  }

  return (
    <div>
      <form className="flex flex-col items-center gap-6" onSubmit={createQuestion}>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="InputTitle">Title</label>
          <input
            className="w-[600px] h-[33px] bg-white border border-[rgba(0,0,0,0.25)] rounded-md text-black pl-2.5 outline-none"
            name="InputTitle"
            type="text"
            placeholder="Enter the title of your question"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="InputDescription">Description</label>
          <textarea
            name="InputDescription"
            className="w-[600px] h-48 p-4 border-2 border-gray-300 rounded-lg text-lg resize-none focus:outline-none placeholder-gray-400"
            placeholder="Digite a Descrição" />
        </div>

        {error && <p className="text-red-500 ml-0.75">Nome ou senha incorreta</p>}

        <div className="flex gap-14 mt-6">
          <button onClick={() => router.back()} type="button" className="p-1 px-6 border border-black rounded-md">
            Back
          </button>
          <input type="submit" className="bg-[#2C73EB] p-1 px-2 text-white border-white rounded-md" value="create questions" />
        </div>
      </form>
    </div>
  );
}
