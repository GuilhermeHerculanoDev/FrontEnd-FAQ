
import { fetchClient } from "@/libs/fetchClient";


export const deleteanswers = async (value: any) => {
    try{
        const response = await fetch(`http://localhost:3000/answers/${value}`, {
            method: "DELETE",
        })
        
        if (!response.ok) {
            throw new Error("Erro ao apagar resposta");
        }
        return "Apagada com sucesso";
    }catch(error){
        return "Error a procurar na api"
    }
  };
