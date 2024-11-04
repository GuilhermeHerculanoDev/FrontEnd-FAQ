import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from '@/components/NavBar';

export default async function Home() {
  const session = await getServerSession()

  if(!session){
    redirect("/login")
  }

  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
