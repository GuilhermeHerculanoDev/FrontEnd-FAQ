
import { fetchClient } from "@/libs/fetchClient";

export const edituser = async (data: { name?: string | undefined; email?: string | undefined; password?: string;  description?: string | undefined; telephone?: string | undefined; id?: any; }) => {
    
    const response = await fetchClient(`http://localhost:3000/users/${data.id}`, {
        method: 'PATCH',
        body: JSON.stringify(data), 
        headers: { "Content-Type": "application/json" }
    });


    if (response.status === 400 || response.status === 401){
        const user = await response.json()

        if(user.message){
            console.log(user.message)
            return user.message
        }    
    }

    if(response.status === 200){
        return "Dados editados com sucesso!!!"
    }

    return null
    
};