import NavBar from "@/components/Utils/NavBar";
import NavBarQuestions from "@/components/Questions/NavBarQuestions";
import Footer from "@/components/Utils/Footer";

interface CategoryProps {
  params: {
    id: string;
    category_name: string;
  };
}

export default async function PageCategory ({ params }: CategoryProps)  {
  const { id, category_name } = await params;

  const decodedCategoryName = decodeURIComponent(category_name as string);

  return (
    <div>
      <NavBar />

      <h1 className="text-4xl text-center mt-20 mb-20 font-semibold">Frequently asked question about {decodedCategoryName}</h1>
      
      <div className="flex flex-col justify-center itens-center text-center ">
        <NavBarQuestions value={id} />
      </div>

    </div>
  )
};

