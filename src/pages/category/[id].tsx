import { Button } from "@/components/ui/button";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
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
type objectType = {
  limit: number;
  items: CategoriesPage[];
  totalItems: number;
  page: number;
};

export async function getServerSideProps(args: GetServerSidePropsContext) {
  console.log(args,'args');
  const res = await axios.get("https://nt.softly.uz/api/front/products", {
    params: {
      page: args.query.page,
      limit: args.query.limit,
      categoryId: args.params?.id,
    },
  });
  
  return {
    props: {
      data: res.data,
    },
  };
}
function CategorieProduct({ data }: { data: objectType }) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const limit = Number(searchParams.get("limit") || 4);

  if (!data) {
    return (
      <div className="mx-auto container text-center  text-xl ">loading...</div>
    );
  }
  const pageCount = Math.ceil(data.totalItems / limit);
  const params = useParams();
  if (!params) {
    return <></>;
  }
  return (
    <div>
      <div className="grid grid-cols-4 container w-full mx-auto py-4">
        {data.items.map((item:any) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className="flex justify-center gap-2 mb-5">
        {[...Array(pageCount)].map((_, index) => {
          return (
            <div key={index}>
              <Link
                href={`/category/${params.id}?page=${
                  index + 1
                }&limit=${limit}`}
              >
                <Button
                  variant={index + 1 === Number(page) ? "outline" : "ghost"}
                >
                  {index + 1}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategorieProduct;
