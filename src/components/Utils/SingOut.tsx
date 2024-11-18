"use client"

import { deleteCookie } from "cookies-next";

export default function SingOut() {

    function deleteToken(){
        deleteCookie("token") 
        window.location.href = "/login"
    }

    return (
        <>
            <button className="border bg-red-500 text-white px-3 py-1 rounded hover:underline" onClick={deleteToken}>Sair</button>
        </>
    )
}
