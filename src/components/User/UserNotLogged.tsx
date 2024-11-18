"use client"

import useUserUrl from "@/libs/useUserUrl"
import Link from "next/link"

export default function UserNotLogged() {
  const iduser = useUserUrl()
  console.log(iduser)

  if (iduser) {
    return null
  }

  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-gray-500 bg-opacity-50 z-50">
      <div className="flex justify-center items-center h-full pt-16"> 
        <div className="p-6 bg-white rounded shadow-md max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Você não está logado</h2>
          <p className="mb-4">Para continuar, faça login ou cadastre-se:</p>
          <div className="flex justify-between">
            <Link href={"/login"} className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Login
            </Link>
            <Link href={"/register"} className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
              Cadastro
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
