import { fetchClient } from "@/libs/fetchClient";

export const createcategory = async (data:any) => {
    if(data){
        const response = await fetchClient("http://localhost:3000/category", {
            method: 'POST',
            body: JSON.stringify(data), 
            headers: { "Content-Type": "application/json" }
        });


        if (response.status === 400){
            const user = await response.json()

            if(user.message){
                console.log(user.message)
                return user.message[0]
            }    
        }

        if(response.status === 201){
            return "Categoria criada com sucesso"
        }
    }

    return null
    
};
