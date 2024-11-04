import Link from "next/link";

export default function NavBar() {
    return (
        <div className="border-b border-gray-400">
            <div className="flex justify-between items-center m-5">
                <div>
                    <h1>FAQ</h1>
                </div>

                <div className="flex gap-16">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/category"}>Category</Link>
                    <Link href={"/profile"}>Profile</Link>
                    <Link href={"/about"}>About</Link>
                </div>

                <div>
                    <button className="bg-blue-600 text-white text-sm py-1 px-7 rounded-md">
                        <Link href={"/login"}>Login</Link>
                    </button>
                </div>
            </div>    
        </div>
    );
  }