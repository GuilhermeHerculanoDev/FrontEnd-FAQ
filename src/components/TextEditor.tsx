"use client"

import { useState } from "react";
import useUserUrl from "@/libs/useUserUrl";
import { createanswers } from "@/app/api/answers/createanswers";

// interface Answers {
//   id:
// }

export default function TextEdit(value:any) {
  const [viewContainer, SetViewContainer] = useState(false)
  const idUser = useUserUrl()
  console.log(value)
  const decodedId = decodeURIComponent(value as string);
  console.log(decodedId)

  async function answerQuestion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const decodedId = parseInt(decodeURIComponent(value.value).replace('}', ''))
    const data = {
      users_id: idUser,
      question_id :decodedId,
      answer:  formData.get("inputAnswers"),
      date: new Date()
    }

    const response = await createanswers(data)

    if (response === "Respondida com sucesso"){
      alert("Pergunta Respondida com sucesso!!!")
      location.reload()
    }
  }
    return (
      <div className="flex flex-col items-center ">
        <button onClick={() => SetViewContainer(true)}>Responder Pergunta</button>
      <form className=" flex flex-col items-center my-4" onSubmit={answerQuestion}>
        { viewContainer &&
        <><textarea
            name="inputAnswers"
            className="w-4/5 h-48 p-4 border border-black rounded-lg text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="Digite a sua resposta" />
          <button onClick={() => SetViewContainer(false)}>Cancelar</button>
          <input type="submit" className="border" value={"Enviar"}/>
          </>
      }
    </form>
    </div>
    );
  }