"use client"
import { fetchClient } from "@/libs/fetchClient";
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

type InfoUsers = {
    name: string;
    email: string;
    telephone: string;
    description: string;
}

export default function InfoUsers( value: any) {
    const [infoUser, setInfoUser] = useState<InfoUsers| null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [url, setUrl] = useState<string | null>(null);  

    useEffect(() =>{
        const tokenFromCookie = Cookies.get('token');
        setToken(tokenFromCookie || null);
        console.log(token)
    }, [])

    useEffect(() => {
        if (token) {
            const decoded = jwt.decode(token);
            const userUrl = decoded?.sub as string; 
            setUrl(userUrl)
        }
    }, [token]);

    useEffect(() => {
        fetchClient(`http://localhost:3000/users/${url}`, {
            method: 'GET',
        }).then(async (response) => {
            if (response.status === 200) {
                const data = await response.json();
                console.log(data); 
                setInfoUser(data);
            }
        });
    }, [url]);

    return (
      <div className="flex flex-col justify-center items-center gap-10">
        <div className=" flex flex-col text-center gap-2 mt-4">
            <p>{infoUser?.name}</p>
            <p>{infoUser?.description}</p>
        </div>
        <div className="flex gap-40 mt-6">
            <div className="flex flex-col">
                <p className="font-semibold">Email:</p>
                <p>{infoUser?.email}</p>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold">Telefone:</p>
                <p>{infoUser?.telephone}</p>
            </div>
        </div>

        <button className="mt-2 w-[100px] h-[25px] bg-[#2C73EB] border border-[#2C73EB] rounded-md text-white outline-none cursor-pointer">
            Edit
        </button>
      </div>
    );
  }
  