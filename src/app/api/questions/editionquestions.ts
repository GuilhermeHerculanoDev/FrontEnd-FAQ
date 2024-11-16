import { fetchClient } from "@/libs/fetchClient";


export const editionquestion = async (data:any) => {
    console.log("Dados a serem enviados:", data);
    console.log(data.id_questions.id)

    const newData = {
      title: data.title,
      description: data.description
    }
    
  
    const response = await fetchClient(`http://localhost:3000/questions/${data.id_questions}`, {
      method: "PATCH",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.status === 400) {
      const user = await response.json();
      if (user.message) {
        console.log(user.message);
        return user.message;
      }
    }
  
    if (response.status === 200) {
      return "Questão Editada com sucesso";
    }
  
    return null;
  };