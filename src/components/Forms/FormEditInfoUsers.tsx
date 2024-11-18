"use client"

import { useState } from "react";
import { edituser } from "@/app/api/users/edituser";
import { verifypassworduser } from "@/app/api/users/verifypassworduser";
import Link from "next/link";

export default function FormEditInfoUsers( value: any) {
    const [messageError, SetmessageError] = useState<string | null>(null)
    const [messageErrorPassword, SetmessageErrorPassword] = useState<string | null>(null)
    const [confirmPassword, SetConfirmPassword] = useState(true)

    async function verifyPassword(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const password = formData.get("InputVerifyPassword")
        const data = {
            id: value.value,
            password: password
        }
        const response = await verifypassworduser(data)
        if (response === "Senha correta") {
            SetmessageErrorPassword("")
            SetConfirmPassword(false)
            SetmessageErrorPassword("")
        }else{
            SetmessageErrorPassword(response)
        }

    }

    async function editInfo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if (formData.get("InputPassword") !== formData.get("InputConfirmPassword")){
            return SetmessageError("As senhas não coinciden")
        }

        const Alldata = {
            id: value.value,
            name: formData.get("InputName"),
            email: formData.get("InputEmail"),
            password: formData.get("InputPassword"),
            description: formData.get("InputDescription"),
            telephone: formData.get("InputTelephone"),
        };

        const filteredData = Object.fromEntries(
            Object.entries(Alldata).filter(([_, value]) => value !== "" && value !== null)
        );

        if (Object.keys(filteredData).length === 1 && filteredData.id) {
            return SetmessageError("Preença pelo menos um campo.");
        }

        const api = await edituser(filteredData)
        alert(api)
    }

    return (
        <div>
        <form className="flex flex-col bg-white justify-center items-center gap-4" onSubmit={editInfo}>
            <div className="flex gap-20 mt-6">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="InputName">Nome</label>
                        <input
                            className=" w-[300px] bg-white border border-gray-300 rounded-md text-black pl-2.5 p-1 outline-none"
                            name="InputName"
                            placeholder="Nome do usuario"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="InputEmail">Email</label>
                        <input
                            className=" bg-white border border-gray-300 rounded-md text-black pl-2.5 p-1 outline-none"
                            name="InputEmail"
                            placeholder="Email do usuario"
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="InputPassword">New Password</label>
                        <input
                            className=" bg-white border border-gray-300 rounded-md text-black pl-2.5 p-1 outline-none"
                            name="InputPassword"
                            placeholder="Senha do usuario"
                            type="text"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="InputDescription">Description</label>
                        <input
                            className=" bg-white border border-gray-300 rounded-md text-black pl-2.5 p-1 outline-none"
                            name="InputDescription"
                            placeholder="Edição do usuario"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="InputTelephone">Telefone</label>
                        <input
                            className=" w-[300px] bg-white border border-gray-300 rounded-md text-black pl-2.5 p-1 outline-none"
                            name="InputTelephone"
                            placeholder="Telefone do usuario"
                            type="number"
                        />
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="InputConfirmPassword">Confirm Password</label>
                        <input
                            className=" bg-white border border-gray-300 rounded-md text-black pl-2.5 p-1 outline-none"
                            name="InputConfirmPassword"
                            placeholder="Confirme a senha usuario"
                            type="text"
                        />
                    </div>
                </div>
            </div>
            { messageError && 
                <p className="text-red-500">{messageError}</p>
            }
           <div className="flex flex-row gap-4 mt-2">
                <button className=" px-2 py-2 border border-gray-300 rounded flex-1" type="button">
                    <Link href={"/profile"}>Cancelar</Link>
                </button>
                <button className="bg-[#2C73EB] border border-[#2C73EB] rounded text-white text-center flex-1 py-2 px-2" type="submit">
                    Enviar
                </button>
            </div>

            </form>

            { confirmPassword &&
            <form onSubmit={verifyPassword}>
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center flex flex-col justify-center gap-8">
                    <div className="flex flex-col items-center gap-6">
                        <label htmlFor="InputVerifyPassword">Digite a sua senha atual</label>
                        <input
                            className="w-[300px] bg-white border border-gray-300 rounded-md text-black pl-2.5 p-1 outline-none"
                            name="InputVerifyPassword"
                            type="text"
                        />
                    </div>
                    { messageErrorPassword && 
                        <p className="text-red-500">{messageErrorPassword}</p>
                    }
                    <div className="flex gap-5 justify-center">
                        <button className="border border-gray-300 text-black px-4 py-2 rounded" type="button">
                            <Link href={"/profile"}>Cancelar</Link>
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Entrar</button>
                    </div>
                </div>
            </div>
    
        </form>
            }
      </div>
    );
  }
  