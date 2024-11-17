import { fetchClient } from "@/libs/fetchClient";

export const getanswersusers = async (value:any) => {

    const response = await fetchClient(`http://localhost:3000/answers/searchAnswersUser/${value}`, {
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
  
    return null;
  };