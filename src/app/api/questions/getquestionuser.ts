import { fetchClient } from "@/libs/fetchClient";


export const getquestionuser = async (value:any) => {
    if(value){
      const response = await fetchClient(`http://localhost:3000/questions/searchQuestionsUser/${value}`, {
        method: "GET",
      });
    
      if (response.status === 400) {
        const user = await response.json();
        if (user.message) {
          console.log(user.message);
          return user.message;
        }
      }
    
      if (response.status === 200) {
        return await response.json();
      }
    }
  
    return null;
  };