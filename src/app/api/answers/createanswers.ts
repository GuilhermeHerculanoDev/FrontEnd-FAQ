"use client";

import { fetchClient } from "@/libs/fetchClient";


  export const createanswers = async (data: any) => {
    const response = await fetchClient(`http://localhost:3000/answers/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
  })
      
    if (!response.ok) {
      throw new Error("Erro ao responder pergunta");
    }
    return "Respondida com sucesso";
  };
