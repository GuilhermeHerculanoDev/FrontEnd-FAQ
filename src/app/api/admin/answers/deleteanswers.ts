import { fetchClient } from "@/libs/fetchClient";

export const deleteanswer = async (value:any) => {
    console.log("Dados a serem enviados:", value);
  
    const response = await fetchClient(`http://localhost:3000/answers/${value}`, {
      method: "DELETE",
    });
  
    if (response.status === 400) {
      const user = await response.json();
      if (user.message) {
        console.log(user.message);
        return user.message;
      }
    }
  
    if (response.status === 200) {
      return "Questão apagada com sucesso";
    }
  
    return null;
  };