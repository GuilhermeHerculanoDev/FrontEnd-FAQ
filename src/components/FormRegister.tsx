"use client"
import Button from "./Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormRegister() {

  return (
    <div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="inputName">Nome</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-[#696F79] rounded-md text-black pl-2 outline-none"
            name="InputName"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="inputEmail">Email</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-[#696F79] rounded-md text-black pl-2 outline-none"
            name="InputEmail"
            type="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="inputPassword">Senha</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-[#696F79] rounded-md text-black pl-2 outline-none"
            name="InputPassword"
            type="password"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="inputConfirmPassword">Confirmar Senha</label>
          <input
            className="w-[440px] h-[33px] bg-white border border-[#696F79] rounded-md text-black pl-2 outline-none"
            name="InputConfirmPassword"
            type="password"
          />
        </div>

        <Button value="Registrar conta" />
      </form>
    </div>
  );
}
