"use client"

import { useEffect, useState } from "react";
import { getallquestions } from "@/app/api/questions/getallquestions";
import { deletequestion } from "@/app/api/admin/questions/deletequestion";

export default function AdminAllQuestions() {
    const [allQuestions, SetAllQuestions] = useState<[]>([])

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await getallquestions();
            SetAllQuestions(response || []);
          } catch (error) {
            console.error("Erro ao carregar perguntas:", error);
          } 
        }
        fetchQuestions();
    }, []);
    console.log(allQuestions)

    return (
    <div className="flex-1 ml-[250px] p-6 bg-gray-50">
                    <div className="mb-5">
                        <h1 className="text-3xl font-bold">Questões</h1>
                        <p className="text-lg text-gray-600">Informações sobre as questões</p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-5">
                        <h2 className="text-xl font-semibold mb-4">Questions Information</h2>
                        <table className="min-w-full table-auto">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 text-left bg-gray-100">User</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Date</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Title</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Description</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            { allQuestions.length == 0 ?(
                            <tr>
                            <td colSpan={4} className="text-center py-4">
                                Nenhuma Questão disponível
                            </td>
                            </tr>
                        ) :
                            allQuestions.map((question:any) => (
                                
                            <tr key={question.id}>
                                <td className="px-4 py-2 border-b">{question.user.name}</td>
                                <td className="px-4 py-2 border-b">{new Date(question.date).toLocaleDateString()}</td>
                                <td className="px-4 py-2 border-b">{question.title}</td>
                                <td className="px-4 py-2 border-b">{question.description}</td>
                                <td className="px-4 py-2 border-b">
                                <button className="text-red-500 hover:underline" onClick={() => {deletequestion(question.id); location.reload()}}>Delete</button>
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