import Image from 'next/image';
import FormRegister from "@/components/FormRegister";
import Link from 'next/link';

export default function Register() {
  return (
    <div className="mx-0 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] h-screen">
      <div className="bg-[#0DDFC3] flex flex-col justify-center items-center gap-[70px]">
        <h1 className="text-center text-white text-3xl font-bold">
      Create your account and<br/> enjoy everything it has to <br/>offer
        </h1>
        <Image src={'/ImgRegister.png'} alt={'Register Image'} width={300} height={260}/>
      </div>

      <div className="bg-[#E3F9F6] flex flex-col justify-center items-center h-screen text-black">
        <h1 className="text-center font-bold text-3xl mb-5">Create account</h1>
        <div className="flex flex-col gap-5">
          <FormRegister />
        </div>
        <p className="text-[15px] mt-5 text-[#696F79]">
          Already have an account? <Link href="/login" className="text-[#2C73EB]">Login</Link>
        </p>
      </div>
    </div>
  );
}
