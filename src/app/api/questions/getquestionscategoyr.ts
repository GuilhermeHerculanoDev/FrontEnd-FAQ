import { fetchClient } from "@/libs/fetchClient";


export const getquestionscategory = async (value:any) => {

    const response = await fetch(`http://localhost:3000/questions/searchQuestions/${value}`, {
      method: "GET",
    });
  
    if (!response.ok) {
      const user = await response.json();
      if (user.message) {
        console.log(user.message);
        return [];
      }
    }
  
    if (response.status === 200) {
      return await response.json();
    }
  
    return null;
  };