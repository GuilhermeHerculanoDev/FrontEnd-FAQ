import { fetchClient } from "@/libs/fetchClient";

export const verifypassworduser = async (data: { id: FormDataEntryValue | null; password: FormDataEntryValue | null }) => {
    try {
        const response = await fetch(`http://localhost:3000/auth/verifyPassword/${data.id}`, {
            method: 'POST',
            body: JSON.stringify(data), 
            headers: { "Content-Type": "application/json" }
        });

        if (response.status === 400 || response.status === 401) {
            const user = await response.json();

            if (user.message) {
                console.log(user.message);
                return user.message;  
            } else {
                console.log("Erro desconhecido:", user);
                return "Erro desconhecido";
            }
        }

        if (response.status === 200) {
            return "Senha correta";
        }

        console.log("Status inesperado:", response.status);
        return "Erro ao verificar a senha";
    } catch (error) {
        console.error("Erro ao enviar a requisição:", error);
        return "Erro ao verificar a senha";
    }

    return null; 
};
