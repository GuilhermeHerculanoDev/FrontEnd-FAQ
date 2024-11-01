import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession()

  if(!session){
    redirect("/login")
  }

  return (
    <div>
      <h1>Bem vindo</h1>
    </div>
  );
}
