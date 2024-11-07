import NavBar from "@/components/NavBar";
import CardsQuestions from "@/components/CardsQuestions";
import Footer from "@/components/Footer";

interface ProductPageProps {
  params: {
    id: string;
    category_name: string;
  };
}

export default async function PageCategory ({ params }: ProductPageProps)  {
  const { id, category_name } = await params;

  const decodedCategoryName = decodeURIComponent(category_name as string);

  console.log(id)

  return (
    <div>
      <NavBar />

      <h1 className="text-4xl text-center mt-20 mb-20 font-bold">Frequently asked question about {decodedCategoryName}</h1>
      
      <div className="flex flex-col justify-center itens-center text-center">
        <CardsQuestions value={id} />
      </div>

      <Footer />
    </div>
  )
};

