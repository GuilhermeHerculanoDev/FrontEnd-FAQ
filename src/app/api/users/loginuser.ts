
import { setCookie } from "cookies-next"; 

export const loginuser = async (data: any) => {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });

  if (response.status !== 200) {
    return null;
  }

  const authData = await response.json();

  if (authData.token) {
    setCookie("token", authData.token);  
    return authData;
  }

  return null;
};
