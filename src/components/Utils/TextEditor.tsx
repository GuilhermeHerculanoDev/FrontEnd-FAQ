"use client"

import { useState } from "react";
import useUserUrl from "@/libs/useUserUrl";
import { createanswers } from "@/app/api/answers/createanswers";
import UserNotLogged from "../User/UserNotLogged";

export default function TextEdit({ value }: { value: any }) {
  const [viewContainer, SetViewContainer] = useState(false);
  const [answer, setAnswer] = useState(""); 
  const [successMessage, setSuccessMessage] = useState("");
  const idUser = useUserUrl();

  async function answerQuestion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!answer.trim()) {
      alert("Por favor, insira uma resposta antes de enviar.");
      return;
    }

    const decodedId = parseInt(decodeURIComponent(value).replace('}', ''));
    const data = {
      users_id: idUser,
      question_id: decodedId,
      answer: answer,
      date: new Date()
    };

    const response = await createanswers(data);

    if (response === "Respondida com sucesso") {
      setSuccessMessage("Pergunta respondida com sucesso!");
      setAnswer(""); 
      SetViewContainer(false); 
      location.reload()
    }
  }

  return (
    <div className="flex flex-col items-center">
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      { viewContainer === false && (
        <button onClick={() => SetViewContainer(true)} className="border p-2 rounded bg-blue-500 text-white">
          Responder Pergunta
        </button>
      )
      }
      {viewContainer && (
        <form className="flex flex-col w-full items-center my-4" onSubmit={answerQuestion}>
          <UserNotLogged />
          <textarea name="inputAnswers" className="w-4/5 h-48 p-4 border border-black rounded-lg text-lg resize-none outile-none" 
            placeholder="Digite a sua resposta"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)} 
          />
          <div className="flex space-x-4 mt-4">
            <button type="button" onClick={() => SetViewContainer(false)} className="border p-2 rounded">Cancelar</button>
            <input type="submit" className="border p-2 rounded bg-blue-500 text-white"value="Enviar"/>
          </div>
        </form>
      )}
    </div>
  );
}
