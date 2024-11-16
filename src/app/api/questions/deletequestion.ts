import { fetchClient } from "@/libs/fetchClient";


export const deletequestion = async (data:any) => {
    console.log("Dados a serem enviados:", data);
  
    const response = await fetchClient(`http://localhost:3000/questions/${data}`, {
      method: "DELETE",
    });
  
    if (response.status === 400) {
      const user = await response.json();
      if (user.message) {
        console.log(user.message);
        return user.message;
      }
    }
  
    if (response.status === 201) {
      return "Questão apagada com sucesso";
    }
  
    return null;
  };