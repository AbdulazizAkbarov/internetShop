"use client";
import axios from "axios";
import Image from "next/image";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import savatIcon from "../../assets/svg/savatIcon.svg";
import yurakIcon from "../../assets/svg/yurakIcon.svg";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export type CategoriesPage = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  createdAt: string;
  imageUrl: string;
};

type objectType = {
  items: CategoriesPage[];
  totalItems: number;
  page: number;
  limit: number;
};

function Category() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 4;

  const [category, setCategory] = useState<CategoriesPage[]>([]);
  const [buttons, setButtons] = useState<objectType | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://nt.softly.uz/api/front/products?categoryId=${id}&page=${page}&limit=${limit}`
      )
      .then((res) => {
        setCategory(res.data.items);
        setButtons(res.data);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
      });
  }, [id, page, limit]);

  const pages = Math.ceil((buttons?.totalItems || 0) / (buttons?.limit || 1));

  if (!id) {
    return <div>Bunday Id Mavjud Emas</div>;
  }

  if (!buttons || category.length === 0) {
    return <div>Ma'lumot yo'q</div>;
  }

  const changePage = (page: number) => {
    router.push(`/category/${id}?page=${page}&limit=${limit}`);
  };

  const changeLimit = (newLimit: number) => {
    router.push(`/category/${id}?page=1&limit=${newLimit}`);
  };

  return (
    <div className="flex flex-col px-12 py-6">
      <div className="flex flex-wrap gap-4">
        {category.map((item) => (
          <div
            key={item.id}
            className="w-[220px] mt-6 relative hover:scale-[1.05] transition-transform shadow-2xl p-3 rounded-xl flex flex-col justify-between"
          >
            <Link href={`/product/${item.id}`}>
              <Image
                className="w-[200px] h-[190px] mb-4 object-contain"
                src={item.imageUrl}
                alt={item.name}
                width={200}
                height={190}
              />
              <Image
                className="w-[20px] absolute top-0 right-1 cursor-pointer"
                src={yurakIcon}
                alt="heart"
              />
              <h2 className="font-semibold">{item.name}</h2>
              <h2 className="bg-[#ECECEC] inline-block rounded text-md my-4">
                {item.description}
              </h2>
            </Link>
            <div className="flex justify-between items-center">
              <h2>{item.price.toLocaleString("ru")} so'm</h2>
              <div className="border-2 border-[#2C698D] p-1 rounded cursor-pointer">
                <Image
                  src={savatIcon}
                  alt="add-to-cart"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="text-sm text-gray-500">Qolgan: {item.stock} dona</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Pagination>
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changePage(page - 1);
                  }}
                />
              </PaginationItem>
            )}

            {[...Array(pages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={page === i + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    changePage(i + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {page < pages && (
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changePage(page + 1);
                  }}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default Category;
