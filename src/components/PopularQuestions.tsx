"use client"

import { useEffect, useState } from "react"
import { getallquestions } from "@/app/api/questions/getallquestions"

export default function PupularQuestions() {
    const [popularQuestions, SetPopularQuestions] = useState<[]>([])
    
    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await getallquestions();
            SetPopularQuestions(response || []);
          } catch (error) {
            console.error("Erro ao carregar perguntas:", error);
          } 
        }
        fetchQuestions();
    }, []);

    const allPopularQuestions = popularQuestions.slice(0, 9)
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {allPopularQuestions.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-sm">Sem perguntas</p>
        ) : (
          allPopularQuestions.map((question: any) => (
            <div key={question.id} className="flex flex-col border border-black p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-xs text-left text-gray-600">{question.category.category_name}</p>
              <p className="text-sm font-medium text-center text-gray-800 mt-1">{question.title}</p>
            </div>
          ))
        )}
      </div>
      
    )
}