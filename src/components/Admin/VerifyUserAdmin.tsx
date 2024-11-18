"use client"

import verifyAdmin from "@/libs/verifyAdmin"
import Link from "next/link"

export default function VerifyUserAmin() {
  const isAdmin = verifyAdmin()

  if(isAdmin){
    return null
  }


  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-gray-500 bg-opacity-50 z-50">
      <div className="flex justify-center items-center h-full pt-16"> 
        <div className="p-6 bg-white rounded shadow-md max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Você não é um Administrador</h2>
          <p className="mb-4">Para continuar, faça login com um ADM</p>
          <div className="flex justify-center items-center-between">
            <Link href={"/login"} className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Volta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
