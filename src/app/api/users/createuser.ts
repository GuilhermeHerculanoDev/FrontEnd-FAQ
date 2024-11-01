export const createuser = async (data: { name: FormDataEntryValue | null; email: FormDataEntryValue | null; password: FormDataEntryValue | null }) => {

    console.log("Dados a serem enviados:", data);

    const response = await fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: { "Content-Type": "application/json" }
    });


    if (response.status === 400){
        const user = await response.json()

        if(user.message){
            console.log(user.message)
            return user.message
        }    
    }

    if(response.status === 201){
        return "Usuario cadastrado com sucesso"
    }

    return null
    
};
