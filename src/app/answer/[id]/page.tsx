import NavBar from "@/components/NavBar";
import CardsAnswers from "@/components/CardsAnswer";
import Question from "@/components/Questions";
import CardsQuestions from "@/components/CardsQuestions";
import Footer from "@/components/Footer";

interface AnswerProps {
  params: {
    id: string;
  };
}

type Questions = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export default async function Answer ({ params }: AnswerProps)  {
  const { id } = await params;

  console.log(id)

  return (
    <div>
        <NavBar />

        {/* <h1 className="text-4xl text-center font-semibold mt-10">Pergunta</h1> */}

        <div className="flex flex-col items-center mb-10 mt-10 gap-6">
          <Question value = {id} />
        </div>

        <div>
            <CardsAnswers value={id}/>
        </div>

        <div className="flex items-center justify-center mt-20 space-x-4 gap-16">
          <h1 className="text-2xl font-semibold">Outras Perguntas</h1>
          <div className="w-3/5 h-px bg-[#262626]"></div>
        </div>

        <div className="mt-10">
          <CardsQuestions value={id}/>
        </div>


        <Footer />
    </div>
  )
};

