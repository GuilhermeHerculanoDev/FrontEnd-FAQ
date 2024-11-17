"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useUserUrl from "@/libs/useUserUrl";
import { getallcategory } from "@/app/api/category/getallcategory";
import { createquestion } from "@/app/api/questions/createquestion";

export default function FormCreateQuestion({ value }: { value: any }) {
  const userUrl = useUserUrl()
  const router = useRouter();
  const [error, setError] = useState(false);
  const [messageError, SetMessageError] = useState<string | null>(null)
  const [allCategory, SetAllCategoty] = useState<[]>([])
  const [idCategory, SetCategoryId] = useState<string | null>(null)
  const [activeButton, SetActiveButton] = useState<number | null>()
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getallcategory();
        SetAllCategoty(response || []);
      } catch (error) {
        console.error("Erro ao carregar Categorias:", error);
      } 
    }
    fetchQuestions();
}, [useUserUrl]);

  function categoryId(value:any){
    SetActiveButton(value)
    SetCategoryId(value)
  }

  async function createQuestion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      users_id: userUrl,
      category_id: idCategory,
      title: formData.get("InputTitle"),
      description: formData.get("InputDescription"),
    };

    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== "" && value !== null)
  );

  if (Object.keys(filteredData).length === 1 && filteredData.users_id) {
      setError(true)
      return SetMessageError("Preença todos os campos.");
  }

    try {
      const responseMessage = await createquestion(data);
      if (responseMessage.ok) {
        alert("Pergunta criada com sucesso")
        router.back();
      }
      setError(true);
      SetMessageError(responseMessage)
    } catch (error) {
      console.error("Erro ao criar questão:", error);
      setError(true);
    }
  }

  return (
    <div>
      <form className="flex flex-col items-center gap-6" onSubmit={createQuestion}>

        <div className="flex gap-1 items-center relative w-[600px] max-w-2xl overflow-hidden">
          <p>Category:</p>
          <div id="carousel" className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">
          {
            allCategory.length === 0 ? (
              <p className="text-center mt-10">Error ao carregar as categorias</p>
            ) : (
              allCategory.map((category:any) => (
                <button key={category.id} type="button" onClick={() => categoryId(category.id)} className={`border p-1 rounded ${activeButton === category.id ? "bg-[#2C73EB] text-white" : ""}`}>
                  <p className="text-sm truncate">{category.category_name}</p>
                </button>
              ))
            )
          }
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="InputTitle">Title</label>
          <input
            className="w-[600px] h-[33px] bg-white border border-[rgba(0,0,0,0.25)] rounded-md text-black pl-2.5 outline-none"
            name="InputTitle"
            type="text"
            placeholder="Enter the title of your question"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="InputDescription">Description</label>
          <textarea
            name="InputDescription"
            className="w-[600px] h-48 p-4 border border-gray-300 rounded-lg text-lg resize-none focus:outline-none placeholder-gray-400"
            placeholder="Digite a Descrição" />
        </div>

        {error && <p className="text-red-500 ml-0.75">{messageError}</p>}

        <div className="flex gap-14 mt-6">
          <button onClick={() => router.back()} type="button" className="p-1 px-6 border border-black rounded-md">
            Back
          </button>
          <input type="submit" className="bg-[#2C73EB] p-1 px-2 text-white border-white rounded-md" value="create questions" />
        </div>
      </form>
    </div>
  );
}
