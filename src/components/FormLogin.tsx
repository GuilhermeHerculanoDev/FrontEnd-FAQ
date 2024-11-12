"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {signIn} from "next-auth/react"
import Button from "./Button";

export default function FormLogin() {
  const router = useRouter()
  const [error, setError] = useState(false);

  async function login(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const Formdata = new FormData(e.currentTarget)

    const data = {
      username : Formdata.get('InputName'),
      password: Formdata.get('InputPassword')
    }

    const res = await signIn("credentials", {
      ...data,
      redirect:false,
      callbackUrl:"/"
    })

    if (res && !res.ok) {
      setError(true);
    } else {
      router.push(res?.url || "/");
    }

  }

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={login}>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="InputName">Name</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-white rounded-md text-black pl-2.5 outline-none"
            name="InputName"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="InputPassword">Password</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-white rounded-md text-black pl-2.5 outline-none"
            name="InputPassword"
            type="password"
          />
        </div>

        {error && <p className="text-red-500 ml-0.75">Nome ou senha incorreta</p>}

        <Button value="Login" />
      </form>
    </div>
  );
}
