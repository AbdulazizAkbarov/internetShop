import axios from "axios";
import React, { useEffect, useState } from "react";

function NavbarBottom() {
  const [category, setCategory] = useState<categoryType[]>([]);

  type categoryType ={
    name:string
    id:number
  }

useEffect(()=>{
  axios.get("https://nt.softly.uz/api/front/categories").then((res) => {
    setCategory(res.data);
    console.log(res.data);
    
  });

},[])
  return <div className="flex justify-between mx-12 mt-5">{category.map((i)=>{
    return(
      <p className="text-xl font-semibold" key={i.id}>{i.name}</p>
    )
  })}</div>;
}

export default NavbarBottom;
