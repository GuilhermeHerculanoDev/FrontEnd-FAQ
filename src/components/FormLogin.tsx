"use client";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormLogin() {

  return (
    <div>
      <form className="flex flex-col gap-5">
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

        <Button value="Login" />
      </form>
    </div>
  );
}
