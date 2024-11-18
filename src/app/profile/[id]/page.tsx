import NavBar from "@/components/Utils/NavBar"
import FormEditInfoUsers from "@/components/Forms/FormEditInfoUsers"
import Footer from "@/components/Utils/Footer";

interface ProfileProps {
  params: {
    id: string;
    category_name: string;
  };
}

export default function PageCategory({ params }: ProfileProps) {
  const { id, category_name } = params;

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <NavBar />

      <div className="flex flex-col items-center p-5 justify-center mt-10">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold">Informações do Usúario</h1>
          <p className="text-lg text-gray-600">Edite as suas Informações da maniera que preferir</p>
        </div>
        <FormEditInfoUsers value={id} />
      </div>

    </div>
  )
}
