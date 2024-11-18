import { setCookie } from "cookies-next"; 

export const loginuser = async (data: any) => {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).catch(() => null); // Suprime erros diretos do fetch

    if (!response) {
      return { error: "Erro de rede. Verifique sua conexão e tente novamente." };
    }

    if (response.status === 401) {
      return { error: "Credenciais inválidas. Verifique o usuário e senha." };
    }

    if (!response.ok) {
      return { error: "Ocorreu um erro ao fazer login. Tente novamente mais tarde." };
    }

    const authData = await response.json();

    if (authData.token) {
      setCookie("token", authData.token);  
      return authData;
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return { error: "Erro inesperado. Verifique sua conexão e tente novamente." };
  }

  return null;
};
