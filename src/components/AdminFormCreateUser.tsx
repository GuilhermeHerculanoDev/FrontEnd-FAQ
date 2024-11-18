"use client"
import { createuser } from "@/app/api/admin/users/createuser";
import { useState } from "react";

export default function AdminFormCreateUser() {
    const [messageError, SetMessageError] = useState<string | null>("")
    const [error, SetError] = useState(false)
    const [is_admin, SetIsAdmin] = useState(false)

    async function createUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if (formData.get("is_admin") === "admin") {
            SetIsAdmin(true);
        } else {
            SetIsAdmin(false);
        }

        const data = {
            name: formData.get('inputName'),
            email: formData.get('inputEmail'),
            description: formData.get('inputDescription') || null, 
            password: formData.get('inputPassword'),
            is_admin: is_admin 
        }

        if (data.password !== formData.get("inputConfirmPassword")) {
            return SetMessageError("As senhas não coincidem");
        }

        if (!data.name || !data.email || !data.password) {
            return SetMessageError("Preencha todos os campos obrigatórios");
        }

    
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== "" && value !== null)
        );
      
        const response = await createuser(filteredData);
      
        if (response === "Usuario cadastrado com sucesso") {
            alert("Usuário criado com sucesso");
            SetError(false);
            window.location.href = "/admin/users"; 
        } else {
            SetError(true);
            SetMessageError(response); 
        }
    }

    return (
        <form className="flex-1 ml-[250px] p-6 bg-gray-50" onSubmit={createUser}>
            <div className="mb-5">
                <h1 className="text-3xl font-bold">Criação de Usuário</h1>
                <p className="text-lg text-gray-600">Crie um novo usuário com as informações desejadas.</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-5">
                <div className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="inputName" className="text-sm font-medium">Nome</label>
                        <input
                            id="inputName"
                            className="w-full h-[40px] px-3 mt-2 border border-gray-300 rounded-md outline-none"
                            name="inputName"
                            type="text"
                            placeholder="Digite o nome do usuário"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="inputEmail" className="text-sm font-medium">Email</label>
                        <input
                            id="inputEmail"
                            className="w-full h-[40px] px-3 mt-2 border border-gray-300 rounded-md outline-none"
                            name="inputEmail"
                            type="email"
                            placeholder="Digite o email do usuário"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="inputDescription" className="text-sm font-medium">Descrição</label>
                        <input
                            id="inputDescription"
                            className="w-full h-[40px] px-3 mt-2 border border-gray-300 rounded-md outline-none"
                            name="inputDescription"
                            type="text"
                            placeholder="Digite uma descrição (opcional)"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="is_admin" className="text-sm font-medium">Tipo</label>
                        <select
                            id="is_admin"
                            className="w-full h-[40px] px-3 mt-2 border border-gray-300 rounded-md outline-none"
                            name="is_admin"
                        >
                            <option value="">Selecione o tipo de usuário</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="inputPassword" className="text-sm font-medium">Senha</label>
                        <input
                            id="inputPassword"
                            className="w-full h-[40px] px-3 mt-2 border border-gray-300 rounded-md outline-none"
                            name="inputPassword"
                            type="password"
                            placeholder="Digite uma senha"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="inputConfirmPassword" className="text-sm font-medium">Confirmar Senha</label>
                        <input
                            id="inputConfirmPassword"
                            className="w-full h-[40px] px-3 mt-2 border border-gray-300 rounded-md outline-none"
                            name="inputConfirmPassword"
                            type="password"
                            placeholder="Confirme a senha"
                        />
                    </div>

                    { messageError &&
                    <p className="text-red-800">{messageError}</p>
                    }

                    <div className="flex justify-center mt-6">
                        <button className="w-full py-2 bg-blue-500 text-white rounded-md" type="submit">
                            Criar Usuário
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
