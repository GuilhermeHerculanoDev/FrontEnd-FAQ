import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function PageCategory ({ params }: ProductPageProps)  {
  const { id } = params;

  console.log(id)

  return (
    <div>
      <NavBar />
    </div>
  )
};

