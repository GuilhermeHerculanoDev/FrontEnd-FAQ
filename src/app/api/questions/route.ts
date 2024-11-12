"use client";

import { fetchClient } from "@/libs/fetchClient";


  export const QuestionsRoute = async (url: string) => {
    const response = await fetchClient(`http://localhost:3000/questions/${url}`, {
      method: 'GET'})
      
    if (!response.ok) {
      throw new Error("Erro ao buscar dados do usuário");
    }
    return response.json();
  };
