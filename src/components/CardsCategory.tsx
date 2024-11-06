"use client"
import style from "./styles.module.css"
import Category from "@/app/api/category/category";

export default function CardsCategory() {
    if(Category()){
      console.log(Category)
    }
    return (
      <div className={style.Container}>
        <p className="font-bold">Front End</p>
        <p>Duvidas relacionadas a banco de dados, junto com curiosidades</p>
      </div>
    );
  }
  