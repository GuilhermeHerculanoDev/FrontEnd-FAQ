"use client";

import { useEffect, useState } from "react";
import { fetchClient } from "@/libs/fetchClient";

export default function Category() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchClient("http://localhost:3000/category", {
            method: 'GET',
        }).then(async (response) => {
            if (response.status === 200) {
                const data = await response.json();
                console.log(data); 
                setCategory(data);
            }
        });
    }, []);

    return JSON.stringify(category)
}
