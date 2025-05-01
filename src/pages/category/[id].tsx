"use client";
import axios from "axios";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import { GetServerSidePropsContext } from "next";
import { Button, buttonVariants } from "@/components/ui/button";
import CartItem from "@/components/CartItem";

export type CategoriesPage = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  createdAt: string;
  imageUrl: string;
  count?: number;
};

type ObjectType = {
  items: CategoriesPage[];
  totalItems: number;
  page: number;
  limit: number;
};

export async function getServerSideProps(args: GetServerSidePropsContext) {
  const res = await axios.get(`https://nt.softly.uz/api/front/products`, {
    params: {
      page: args.query.page,
      limit: args.query.limit,
    },
  });

  return {
    props: {
      data: res.data,
    },
  };
}

function Category({ data }: { data: ObjectType }) {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 4;

  const pages = Math.ceil((data?.totalItems || 0) / (data?.limit || 1));

  if (!id) {
    return <div>Bunday Id Mavjud Emas</div>;
  }

  return (
    <div className="flex flex-col px-12 py-6 container mx-auto">
      <div className="flex flex-wrap gap-4">
        {data.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {[...Array(pages)].map((_, index) => {
          const index_number = index + 1;
          return (
            <Link
              href={`/category/${id}?page=${index_number}&limit=${data.limit}`}
            >
              <Button
                variant={
                  index_number === Number(data.page) ? "default" : "outline"
                }
              >
                {index_number}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
