"use client"

import { useEffect, useState } from "react";
import { getallusers } from "@/app/api/admin/users/getallusers";
import { deleteuser } from "@/app/api/admin/users/deleteuser";
import Link from "next/link";

export default function AdminAllUsers() {
    const [allUsers, SetAllUsers] = useState<[]>([])

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await getallusers();
            SetAllUsers(response || []);
          } catch (error) {
            console.error("Erro ao carregar usuarios:", error);
          } 
        }
        fetchQuestions();
    }, []);
    console.log(allUsers)

    return (
    <div className="flex-1 ml-[250px] p-6 bg-gray-50">
                    <div className="mb-5">
                        <h1 className="text-3xl font-bold">Usúarios</h1>
                        <p className="text-lg text-gray-600">Informações sobre os usuarios</p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-5">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold ">Users Information</h2>
                            <Link href={"/admin/users/createUser"} className="border p-1 rounded hover:bg-blue-500 hover:text-white hover:border-white">create user</Link>
                        </div>

                        <table className="min-w-full table-auto">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 text-left bg-gray-100">User</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Email</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Description</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Adm</th>
                                <th className="px-4 py-2 text-left bg-gray-100">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            { allUsers.length === 0 ?(
                            <tr>
                            <td colSpan={4} className="text-center py-4">
                                Nenhum Usuário disponível
                            </td>
                            </tr>
                        ) :
                            allUsers.map((users:any) => (
                                
                            <tr key={users.id}>
                                <td className="px-4 py-2 border-b">{users.name}</td>
                                <td className="px-4 py-2 border-b">{users.email}</td>
                                <td className="px-4 py-2 border-b">{users.description}</td>
                                <td className="px-4 py-2 border-b">{users.is_admin ? "Sim" : "Não"}</td>
                                <td className="px-4 py-2 border-b">
                                <button className="text-red-500 hover:underline" onClick={() => {deleteuser(users.id); location.reload()}}>Delete</button>
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