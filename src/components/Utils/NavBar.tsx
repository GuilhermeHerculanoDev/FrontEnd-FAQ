"use client"

import Link from "next/link";
import useUserUrl from "@/libs/useUserUrl";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getuser } from "@/app/api/users/getuser";

type dateUser = {
  name: string
}

export default function NavBar() {
  const iduser = useUserUrl()
  const [activePage, setActivePage] = useState("");
  const [userLogin, SetUserLogin] = useState(false)
  const [dataUser, SetDataUser] = useState<dateUser>()

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getuser(iduser);
        if(response){
          SetDataUser(response)
          SetUserLogin(true);
        }
      } catch (error) {
        console.error("Erro ao carregar os dados do usuario:", error);
      } 
    }
    fetchQuestions();
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, [iduser]);

  return (
      <div className="border-b border-gray-400">
        <div className="flex justify-between items-center m-5">
          <div>
            <Link href={"/"} className="text-xl	">FAQ</Link>
          </div>

          <div className="flex gap-16">
            <Link 
              href="/" 
              className={`font-semibold ${activePage === "/" ? "font-bold border-b-2 border-black" : ""}`}
              onClick={() => setActivePage("/")}
            >
              Home
            </Link>

            <Link 
              href="/category" 
              className={`font-semibold ${activePage === "/category" ? "font-bold border-b-2 border-black" : ""}`}
              onClick={() => setActivePage("/category")}
            >
              Category
            </Link>

            <Link 
              href="/question" 
              className={`font-semibold ${activePage === "/question" ? "font-bold border-b-2 border-black" : ""}`}
              onClick={() => setActivePage("/question")}
            >
              Questions
            </Link>

            <Link 
              href="/profile" 
              className={`font-semibold ${activePage === "/profile" ? "font-bold border-b-2 border-black" : ""}`}
              onClick={() => setActivePage("/profile")}
            >
              Profile
            </Link>
          </div>

          <div>
            { userLogin ? (
              <Link href={"/profile"} className="flex gap-2 justify-center items-center">
                <p className="font-semibold text-lg	">{dataUser?.name}</p>
                <Image src={"/profile.png"} alt="Image User" width={"30"} height={"30"}/>
              </Link>
            ) : <button className="bg-blue-600 text-white text-sm py-1 px-7 rounded-md">
                  <Link href="/login">Login</Link>
                </button> 
            }
          </div>
        </div>    
      </div>
  );
}
