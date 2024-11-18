"use client"

import { useEffect, useState } from "react";
import { getallanswers } from "@/app/api/admin/answers/getallanswers";
import { deleteanswer } from "@/app/api/admin/answers/deleteanswers";

export default function AdminAllAnswers() {
    const [allAnswers, SetAllAnswers] = useState<[]>([])

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await getallanswers();
            SetAllAnswers(response || []);
          } catch (error) {
            console.error("Erro ao carregar respostas:", error);
          } 
        }
        fetchQuestions();
    }, []);
    console.log(allAnswers)

    return (
    <div className="flex-1 ml-[250px] p-6 bg-gray-50">
                    <div className="mb-5">
                        <h1 className="text-3xl font-bold">Screen Admin</h1>
                        <p className="text-lg text-gray-600">Informações sobre os usuarios</p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-5">
                        <h2 className="text-xl font-semibold mb-4">Answers Information</h2>
                        <table className="min-w-full table-auto">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 text-left bg-gray-100">User</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Date</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Answer</th>
                                <th className="px-4 py-2 text-left bg-gray-100">User_Id</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Question_Id</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            { allAnswers.length == 0 ?(
                            <tr>
                            <td colSpan={4} className="text-center py-4">
                                Nenhuma Questão disponível
                            </td>
                            </tr>
                        ) :
                            allAnswers.map((answer:any) => (
                                
                            <tr key={answer.id}>
                                <td className="px-4 py-2 border-b">{answer.user.name}</td>
                                <td className="px-4 py-2 border-b">{new Date(answer.date).toLocaleDateString()}</td>
                                <td className="px-4 py-2 border-b">{answer.answer}</td>
                                <td className="px-4 py-2 border-b">{answer.users_id}</td>
                                <td className="px-4 py-2 border-b">{answer.question_id}</td>
                                <td className="px-4 py-2 border-b">
                                <button className="text-red-500 hover:underline" onClick={() => deleteanswer(answer.id)}>Delete</button>
                                </td>
                            </tr>         
                            
                            ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}