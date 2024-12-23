"use client"

import { getCookie } from "cookies-next"

export const fetchClient = async (
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

    if (response.status === 401 || response.status === 400 || response.status === 404 ){
         console.log("Sessão expirada. Por favor, faça login novamente.");
    }

    return response
}