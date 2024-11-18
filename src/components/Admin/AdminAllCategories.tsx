"use client"

import { useEffect, useState } from "react";
import { getallcategories } from "@/app/api/admin/category/getallcategories";
import { deletecayegories } from "@/app/api/admin/category/deletecategories";
import Link from "next/link";

export default function AdminAllCategories() {
    const [allCategories, SetAllCategories] = useState<[]>([])

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await getallcategories();
            SetAllCategories(response || []);
          } catch (error) {
            console.error("Erro ao carregar categorias:", error);
          } 
        }
        fetchQuestions();
    }, []);
    console.log(allCategories)

    return (
    <div className="flex-1 ml-[250px] p-6 bg-gray-50">
                    <div className="mb-5">
                        <h1 className="text-3xl font-bold">Categorias</h1>
                        <p className="text-lg text-gray-600">Informações sobre as Categorias</p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-5">
                    <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Categories Information</h2>
                            <Link href={"/admin/category/createCategory"} className="border p-1 rounded hover:bg-blue-500 hover:text-white hover:border-white">create category</Link>
                        </div>

                        <table className="min-w-full table-auto">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 text-left bg-gray-100">ID</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Name</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Description</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            { allCategories.length == 0 ?(
                            <tr>
                            <td colSpan={4} className="text-center py-4">
                                Nenhuma Questão disponível
                            </td>
                            </tr>
                        ) :
                            allCategories.map((category:any) => (
                                
                            <tr key={category.id}>
                                <td className="px-4 py-2 border-b">{category.id}</td>
                                <td className="px-4 py-2 border-b">{category.category_name}</td>
                                <td className="px-4 py-2 border-b">{category.category_description}</td>
                                <td className="px-4 py-2 border-b">
                                <button className="text-red-500 hover:underline" onClick={() => {deletecayegories(category.id); location.reload()}}>Delete</button>
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