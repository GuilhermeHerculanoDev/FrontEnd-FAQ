import NavBar from "@/components/Utils/NavBar";
import CardsAnswers from "@/components/Answers/CardsAnswer";
import Question from "@/components/Questions/Questions";
import CardsQuestions from "@/components/Questions/CardsQuestions";
import Footer from "@/components/Utils/Footer";

interface AnswerProps {
  params: {
    id: string;
  };
}

export default async function Answer ({ params }: AnswerProps)  {
  const { id } = await params;

  return (
    <div className="min-h-screen">
        <NavBar />


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


    </div>
  )
};

