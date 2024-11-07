import NavBar from "@/components/NavBar";


interface AnswerProps {
  params: {
    id: string;
  };
}

export default async function Answer ({ params }: AnswerProps)  {
  const { id } = await params;


  console.log(id)

  return (
    <div>
        <NavBar />

        <h1>Answer</h1>

    </div>
  )
};

