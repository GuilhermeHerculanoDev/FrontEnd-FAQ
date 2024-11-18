"use client"
import { useEffect, useState } from "react";
import { getallcategory } from "@/app/api/category/getallcategory";
import Link from "next/link";


export default function CardsPopularCategory(value:any) {
  const [categories, setCategories] = useState<[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getallcategory();
        setCategories(response || []);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      } 
    }
    fetchQuestions();
}, []);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {categories.slice(0, value.value).map((category:any) => (
        <Link key={category.id} href={`/category/${category.id}/${category.category_name}`}>
        <div className={"flex flex-col shadow-md gap-2.5 bg-gray-200 p-2.5 rounded text-center w-72 h-71"}>
          <p className="font-semibold">{category.category_name}</p>
          <p>{category.category_description}</p>
        </div>
        </Link>
      ))}
      </div>
    );
  }
  