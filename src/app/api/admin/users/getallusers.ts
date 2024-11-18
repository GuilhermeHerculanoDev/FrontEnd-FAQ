import { fetchClient } from "@/libs/fetchClient";


export const getallusers = async () => {

    const response = await fetchClient(`http://localhost:3000/users`, {
      method: "GET",
    });
  
    if (!response.ok) {
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