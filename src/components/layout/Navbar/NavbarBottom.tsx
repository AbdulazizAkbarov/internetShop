import { CategoriesPage } from "@/pages/category/[id]";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function NavbarBottom() {
  const [category, setCategory] = useState<CategoriesPage[]>([]);

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/categories").then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="flex justify-between mx-12 mt-5">
      {category.map((i) => {
        return (
          <div key={i.id}>
            <Link href={`/category/${i.id}`}>
              <p className="text-xl font-semibold cursor-pointer" key={i.id}>
                {i.name}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default NavbarBottom;
