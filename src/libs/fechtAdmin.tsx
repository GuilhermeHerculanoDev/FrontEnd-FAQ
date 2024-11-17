import React, { useEffect } from "react";
import { getCookie } from "cookies-next";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken"; // Biblioteca para decodificar JWT

// Tipo para o decoded do JWT, considerando que tenha a propriedade `isAdmin`
interface DecodedToken {
  isAdmin?: boolean;
  exp?: number;
  iat?: number;
}

const fechtAdmin = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("token");

    if (!token) {
      // Se não houver token, redireciona para o login
      router.push("/login");
      return;
    }

    try {
      // Decodifica o token JWT
      const decoded = jwt.decode(token) as DecodedToken;

      if (decoded?.isAdmin === false) {
        console.warn("Você não tem privilégios de administrador.");
        // Redireciona para uma página de não autorizado
        router.push("/not-authorized");
        return;
      }

      // Se não for admin ou não tiver isAdmin no token, o fluxo continua normalmente
    } catch (error) {
      console.error("Erro ao decodificar o token", error);
      // Caso haja erro na decodificação, desconectamos e redirecionamos para login
      signOut();
      router.push("/login");
    }
  }, [router]); // O hook depende do router para navegação

  return (
    <div>
      <h1>Área Restrita para Administradores</h1>
      {/* Conteúdo restrito */}
    </div>
  );
};

export default fechtAdmin;
