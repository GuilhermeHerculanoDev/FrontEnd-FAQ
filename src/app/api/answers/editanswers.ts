
import { fetchClient } from "@/libs/fetchClient";


export const editionanswers = async (data: any) => {
    try{
        const newData = {
            answer: data.answer
          }
        const response = await fetchClient(`http://localhost:3000/answers/${data.id}`, {
            method: "PATCH",
            body: JSON.stringify(newData),
            headers: { "Content-Type": "application/json" },
        })
        
        if (!response.ok) {
            throw new Error("Erro ao Editar resposta");
        }else{
            return "Editada com sucesso";
        }
        
    }catch(error){
        return "Error a procurar na api"
    }
  };
