"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createuser } from "@/app/api/users/createuser";

export default function FormRegister() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null);

  async function register(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const Formdata = new FormData(e.currentTarget)

    const confirmPassword = Formdata.get('InputConfirmPassword')

    const data = {
      name:Formdata.get('InputName'),
      email:Formdata.get('InputEmail'),
      password:Formdata.get('InputPassword')
    }

    if(data.password !== confirmPassword){
      return setError("A senhas não coincidem")
    }

    if (!data.name || !data.email || !data.password) {
      return setError("Preencha todos os campos obrigatórios.")
    }

    const response = await createuser(data)

    if(response === "Usuario cadastrado com sucesso"){
      alert("Usuario criado com sucesso")
      setError(null)
      return router.push("/login")
    }

    return setError(response)

  }

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={register}>
        <div className="flex flex-col gap-2">
          <label htmlFor="inputName">Nome</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-gray-300 rounded-md text-black pl-2 outline-none"
            name="InputName"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="inputEmail">Email</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-gray-300 rounded-md text-black pl-2 outline-none"
            name="InputEmail"
            type="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="inputPassword">Senha</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-gray-300 rounded-md text-black pl-2 outline-none"
            name="InputPassword"
            type="password"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="inputConfirmPassword">Confirmar Senha</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-gray-300 rounded-md text-black pl-2 outline-none"
            name="InputConfirmPassword"
            type="password"
          />
        </div>

        <p className="text-red-500 ml-0.75">{error}</p>

        <input className="w-[440px] bg-[#2C73EB] p-1 text-white border-white rounded-md"
            type="submit"
            value={'Resgister'}
            />
      </form>
    </div>
  );
}
