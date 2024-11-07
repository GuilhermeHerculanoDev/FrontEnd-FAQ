"use client"
import style from "./styles.module.css"
import { useEffect, useState } from "react";
import { fetchClient } from "@/libs/fetchClient";
import Link from "next/link";

type Category = {
  id: number;
  category_name: string;
  category_description: string;
};

export default function CardsPopularCategory() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
      fetchClient("http://localhost:3000/category", {
          method: 'GET',
      }).then(async (response) => {
          if (response.status === 200) {
              const data = await response.json();
              console.log(data); 
              setCategories(data);
          }
      });
  }, []);


    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
        <Link key={category.id} href={`/category/${category.id}`}>
        <div className={style.Container}>
          <p className="font-bold">{category.category_name}</p>
          <p>{category.category_description}</p>
        </div>
        </Link>
      ))}
      </div>
    );
  }
  