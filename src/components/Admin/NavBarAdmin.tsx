"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import useUserUrl from "@/libs/useUserUrl";
import { getuser } from "@/app/api/admin/users/getuser";
import SingOut from "../Utils/SingOut";

export default function NavBarAdmin() {
  const idUser = useUserUrl()
  const [activePage, setActivePage] = useState("");
  const [nameUser, SetNameUser] = useState<string | null>("")

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getuser(idUser);
        if(response){
          SetNameUser(response.name)
        }
      } catch (error) {
        console.error("Erro ao carregar os dados do usuario:", error);
      } 
    }
    fetchQuestions();
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, [idUser]);

  return (
    <div className="fixed left-0 top-0 h-full w-[250px] bg-gray-100 border-r border-gray-400">
      <div className="flex flex-col justify-between items-start p-5">
        <div className="mb-5">
          <Link href={"/admin/users"} className="font-bold text-xl">
            Admin: {nameUser}
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <Link
            href="/admin/users"
            className={`font-semibold ${activePage === "/admin/users" ? "font-bold border-b-2 border-black" : ""}`}
            onClick={() => setActivePage("/admin/users")}
          >
            Users
          </Link>

          <Link
            href="/admin/category"
            className={`font-semibold ${activePage === "/admin/category" ? "font-bold border-b-2 border-black" : ""}`}
            onClick={() => setActivePage("/admin/category")}
          >
            Categories
          </Link>

          <Link
            href="/admin/questions"
            className={`font-semibold ${activePage === "/admin/questions" ? "font-bold border-b-2 border-black" : ""}`}
            onClick={() => setActivePage("/admin/questions")}
          >
            Questions
          </Link>

          <Link
            href="/admin/answers"
            className={`font-semibold ${activePage === "/admin/answers" ? "font-bold border-b-2 border-black" : ""}`}
            onClick={() => setActivePage("/admin/answers")}
          >
            Answers
          </Link>

        </div>
        <div className="fixed bottom-0 mb-5 border ">
          <SingOut />
        </div>
      </div>
    </div>
  );
}
