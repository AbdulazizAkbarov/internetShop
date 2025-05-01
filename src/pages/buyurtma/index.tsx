import { RootState } from "@/store/typr";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "@/components/layout/Footer";
import axios from "axios";
import { fullRemove } from "@/store/Slice/cart.slice";
function Buyurtma() {
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const [yetqazish, setYetqazish] = useState(true);
  const [address, setAddress] = useState("");
  const accessToken = useSelector((state:RootState)=>state.login.accessToken)
  
const dispatch=useDispatch()
const fullremove =()=>{
  dispatch(fullRemove())
}
  const handleSubmit = () => {
if (!address.trim()) {
  alert("Manzil Kiriting !")
  return;
  
}
if (!accessToken) {
  alert("Avval Ro'yhatdan o'ting !")
  return;
  
}
    axios
      .post(
        "https://nt.softly.uz/api/front/orders",
        {
          address: address,
          items: cartItem.map((i) => ({
            productId: i.id,
            quantity: i.count,
          })),
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then(() => {
        alert("Buyurtma Jonatildi")
        fullremove()
      })
      .catch((e) => {
        console.error("Xatolik", e);
      });
  };
  
  const totalPrice = cartItem.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mt-8 px-12">
        Xaridni Rasmiylashtirish
      </h2>
      <div className="bg-[lightgrey] w-full h-[1px] my-12"></div>

      <div  className="flex px-12 justify-between gap-4  mb-3">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <h2 className="bg-black px-4 py-2 rounded-full text-xl font-bold text-white inline-block">
              1
            </h2>
            <h2 className="text-2xl font-bold text-black">
              Sizning Ma'lumotingiz
            </h2>
          </div>
          <input
            type="phone"
            placeholder="+998"
            className="border-1 border-[lightgrey] outline-none p-4 w-[1000px] rounded-lg placeholder:text-[black] font-bold text-xl mb-5"
          />
          <div className="flex gap-2 items-center mt-4">
            <input
              type="text"
              placeholder="Ism"
              className="border-1 border-[lightgrey] outline-none p-4 w-[490px] rounded-lg "
            />
            <input
              type="text"
              placeholder="Familya"
              className="border-1 border-[lightgrey] outline-none p-4 w-[500px] rounded-lg"
            />
          </div>

          <div className="mb-5 flex items-center gap-2 my-12">
            <h2 className="bg-black px-4 py-2 rounded-full text-xl font-bold text-white inline-block">
              2
            </h2>
            <h2 className="text-2xl font-bold text-black">
              Qabul qilish usuli
            </h2>
          </div>

          <div>
            <button
              className="p-4 text-center px-44 border-1 border-[lightgrey] rounded p-2-lg cursor-pointer mr-5"
              onClick={() => {
                setYetqazish(true);
              }}
            >
              Yetkazib Berish
            </button>

            <button
              className="p-4 text-center px-44 border-1 border-[lightgrey] rounded p-2-lg cursor-pointer"
              onClick={() => {
                setYetqazish(false);
              }}
            >
              Dokondan Olib ketish
            </button>
          </div>

          <div className="relative">
            {yetqazish ? (
              <div className="relative">
                <div className="flex items-center gap-5 my-7">
                  <select
                    name=""
                    id=""
                    className="w-[465px] py-4 rounded p-2 text-lg border-1 border-[lightgrey] "
                  >
                    <option className="rounded p-2" value="">
                      Viloyatni Tanlang{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Farg'ona Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Namangan Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Andijon Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Toshkent Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Samarqand Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Buxoro Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Surhondaryo Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Qashqadaryo Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Jizzax Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Toshkent Shahri{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Qoraqalpog'isron Respublikasi{" "}
                    </option>
                  </select>

                  <input
                    type="text"
                    placeholder="Shahar/Tuman"
                    className="border-1 border-[lightgrey] outline-none p-4 w-[505px] rounded-lg"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <input
                    type="text"
                    value={address}
                     onChange={(e) => setAddress(e.target.value)}
                    placeholder="Manzil toliq holatda"
                    className="border-1 border-[lightgrey] outline-none p-4 w-[700px] rounded-lg"
                  />

                  <input
                    type="number"
                    placeholder="Qavat"
                    className="border-1 border-[lightgrey] outline-none p-4 w-[270px] rounded-lg"
                  />
                </div>
              </div>
            ) : (
              "xcvxb"
            )}
          </div>

          <div>
            <p className="font-bold text-2xl my-4 mt-8">
              Yetqazib berish shartlari
            </p>

            <button className="px-24 text-center rounded-2xl border-1 py-2 border-[lightgrey] mr-5">
              <p className="font-bold text-xl">Ertaga yoki keyinroq</p>{" "}
              <p className="text-lg text-[grey]">Beepul</p>
            </button>
            <button className="px-24 text-center rounded-2xl border-1 py-2 border-[lightgrey]">
              <p className="font-bold text-xl">Tez yetkazib berish</p>{" "}
              <p className="text-lg text-[grey]">30 000 so'm</p>
            </button>
          </div>

          

          <div>
            <button
            onClick={()=>{
              handleSubmit()
            }}
              type="submit"
              className="bg-[#33698D] px-10 py-2  font-bold rounded text-white mt-5"
            >
              Buyurtma berish
            </button>
          </div>
        </div>
        <div className="border-1 border-[lightgrey] p-4 w-[500px] rounded-xl ">
          <h2 className="font-bold text-2xl">Buyurtmadagi mahsulotlar</h2>
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex  w-[100%] flex-col  rounded p-2-full my-2 px-5  justify-between items-start py-2"
            >
              <div className="flex gap-5 items-center  justify-start">
                <Image src={item.imageUrl} width={70} height={70} alt="img" />
                <div>
                  <p className="text-xl">{item.name}</p>

                  <div className="flex gap-9 items-center justify-between w-[100%]">
                    <p className="text-xl font-bold">
                      {(item.count * item.price).toLocaleString("ru")} So`m
                    </p>

                    <p>{item.count} ta</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <p className="text-2xl font-bold text-end">
            Jami: {totalPrice.toLocaleString("ru")} so'm
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Buyurtma;
