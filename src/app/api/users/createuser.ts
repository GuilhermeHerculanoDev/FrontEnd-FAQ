export const createuser = async (data: any) => {
    try {
        const response = await fetch("http://localhost:3000/users", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });

        if (response.status === 400) {
            const user = await response.json();
            if (user.message) {
                console.log(user.message); 
                return user.message; 
            }
            return "Erro na solicitação. Verifique os dados enviados.";
        }

        // 
        if (response.status === 201) {
            return "Usuário cadastrado com sucesso";
        }

        const errorText = await response.text();
        console.error("Erro desconhecido:", errorText);
        return `Erro: ${errorText || "Algo deu errado."}`;
    } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
        return "Erro inesperado. Verifique sua conexão e tente novamente.";
    }
};
