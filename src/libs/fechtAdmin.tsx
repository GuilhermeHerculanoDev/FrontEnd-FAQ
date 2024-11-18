"use client"

import { getCookie } from "cookies-next"

export const fetchAdmin = async (
    input: string | URL | Request,
    init?: RequestInit | undefined
): Promise<Response> => {
    const token = getCookie("token")

    const response = await fetch(input, {
        ...init,
        headers: {
            ...init?.headers,
            ...(token && {Authorization: `Bearer ${token}`}),
        },
    })

    if (response.status === 401){
         console.warn("Sessão expirada. Por favor, faça login novamente.");
    }

    return response
}