import Image from 'next/image';
import Link from 'next/link';
import FormLogin from '@/components/Forms/FormLogin';
export default function Login() {
  return (
    <div>
      <div className="grid grid-cols-[1.3fr_1fr] h-screen text-white m-0">
        <div className="flex flex-col justify-center items-center bg-[#E3F9F6]">
          <Image src="/ImgLogin.png" alt="Login Image" width={400} height={300} />
        </div>

        <div className="flex flex-col justify-center items-center bg-[#0DDFC3] h-screen gap-10">
          <h1 className="text-4xl font-bold">Account Login</h1>
          <FormLogin />
          <p className="text-[#696F79] text-sm">
            Don't have an account?{' '}
            <Link href="/register" className="text-[#2C73EB] text-sm">
              Sign up here
            </Link>
          </p>
          <Link href="/" className="text-white bg-blue-500 text-sm border border-blue-500 p-1 rounded">
              Entra sem fazer login
          </Link>
        </div>
      </div>
    </div>
  );
}
