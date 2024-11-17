import NavBar from "@/components/NavBar";
import FormCreateQuestion from "@/components/FormCreateQuestion";
import UserNotLogged from "@/components/UserNotLogged";

interface QuestionProps {
  params: {
    id: string;
  };
}

export default async function CreateQuestion ({ params }: QuestionProps)  {
  const { id } = await params;

  console.log(id)

  return (
    <div>
        <NavBar />

        <UserNotLogged />

        <h1 className="text-center font-semibold text-4xl mt-10 mb-10">Create a new question</h1>

        <FormCreateQuestion value={id}/>
    </div>
  )
};

