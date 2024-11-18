export const createuser = async (data: any) => {
    try {
        const response = await fetch("http://localhost:3000/users", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });

        // Tratar erros 400 de forma personalizada
        if (response.status === 400) {
            const user = await response.json();
            if (user.message) {
                console.log(user.message); // Mensagem de erro personalizada
                return user.message[0]; // Retorna o primeiro erro do array de mensagens
            }
            return "Erro na solicitação. Verifique os dados enviados.";
        }

        // Sucesso
        if (response.status === 201) {
            return "Usuário cadastrado com sucesso";
        }

        // Tratar outros códigos de erro
        const errorText = await response.text();
        console.error("Erro desconhecido:", errorText);
        return `Erro: ${errorText || "Algo deu errado."}`;
    } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
        return "Erro inesperado. Verifique sua conexão e tente novamente.";
    }
};
