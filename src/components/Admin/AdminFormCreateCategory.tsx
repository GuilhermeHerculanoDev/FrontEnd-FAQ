"use client"
import { createcategory } from "@/app/api/admin/category/createcategory";
import { useState } from "react";

export default function AdminFormCreateCategory() {
    const [messageError, SetMessageError] = useState<string | null>("")
    const [error, SetError] = useState(false)

    async function createCategory(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            category_name: formData.get('inputName') || null,
            category_description: formData.get('inputDescription') || null
        }

        // Verificação se algum campo está vazio
        if (!data.category_name || !data.category_description) {
            SetError(true)
            SetMessageError("Preencha todos os campos")
            return;  // Evita continuar a execução se houver erro
        }
      
        const response = await createcategory(data);
      
        if (response === "Categoria criada com sucesso") {
            alert("Categoria criada com sucesso");
            SetError(false);
            window.location.href = "/admin/category"; 
        } else {
            SetError(true);
            SetMessageError(response); 
        }
    }

    return (
        <form className="flex-1 ml-[250px] p-6 bg-gray-50" onSubmit={createCategory}>
            <div className="mb-5">
                <h1 className="text-3xl font-bold">Criação de Categoria</h1>
                <p className="text-lg text-gray-600">Crie uma nova categoria com as informações desejadas.</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-5">
                <div className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="inputName" className="text-sm ">Nome</label>
                        <input
                            id="inputName"
                            className="w-full h-[40px] px-3 mt-2 border border-gray-300 rounded-md outline-none"
                            name="inputName"
                            type="text"
                            placeholder="Digite o nome da Categoria"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="inputDescription" className="text-sm ">Descrição</label>
                        <textarea
                            id="inputDescription"
                            name="inputDescription"
                            className="w-full h-48 p-4 px-3 mt-2 border border-gray-300 rounded-md outline-none"
                            placeholder="Digite a descrição da categoria" 
                        />
                    </div>

                    { messageError && (
                        <p className="text-red-800">{messageError}</p>
                    )}

                    <div className="flex justify-center mt-6">
                        <button className="w-full py-2 bg-blue-500 text-white rounded-md" type="submit">
                            Criar Categoria
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
