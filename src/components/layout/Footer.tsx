import Facebook from "@/assets/svg/facebook";
import Instagram from "@/assets/svg/instagram";
import Telegram from "@/assets/svg/telegram";
import Youtube from "@/assets/svg/youtube";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#272643]">
      <div className=" pt-15 flex  justify-between pl-11 container mx-auto ">
        <div className=" text-[#E3F6F5]">
          <p>Savolingiz bormi? Qo'ng'iroq qiling </p>
          <p className="text-4xl font-bold py-4">+998 93 823 11 77</p>

          <div className=" flex gap-2 py-4">
            <div className="bg-[gray] inline-block p-1.5 rounded">
              <Facebook />
            </div>

            <div className="bg-[gray] inline-block p-1.5 rounded">
              <Telegram />
            </div>

            <div className="bg-[gray] inline-block p-1.5 rounded">
              <Instagram />
            </div>

            <div className="bg-[gray] inline-block p-1.5 rounded">
              <Youtube />
            </div>
          </div>
          <p className="underline pb-5">Do'konimiz Manzillari</p>
        </div>

        <div className="text-[#E3F6F5]">
          <h2 className="font-bold text-2xl pb-4">Kompaniya</h2>
          <p className="text-base/8">Yuridik shaxslar uchun</p>
          <p className="text-base/8">Biz Haqimizda</p>
          <p className="text-base/8">Yangiliklar va bloglar</p>
          <p className="text-base/8">IMEI ni tekshirish</p>
        </div>

        <div className="text-[#E3F6F5]">
          <h2 className="font-bold text-2xl pb-4">Ma'lumot</h2>
          <p className="text-base/8">Bepul yetkazib berish</p>
          <p className="text-base/8">Texnomartda ishlash</p>
          <p className="text-base/8">Shaxsiy kabinet</p>
          <p className="text-base/8">Aloqa raqamlari</p>
        </div>

        <div className="text-[#E3F6F5]">
          <h2 className="font-bold text-2xl pb-4">Haridorga yordam</h2>
          <p className="text-base/8">Maxsulotni qaytarish</p>
          <p className="text-base/8">Mahsulotlar uchun kafolat</p>
        </div>

        <div className="text-[#E3F6F5] ">
          <h2 className="font-bold text-2xl pb-4">Ilovani yuklab olish</h2>

          <div className="flex gap-5 items-center">
            <Image
              src={"https://texnomart.uz/_nuxt/img/qr_code_footer.f794a42.png"}
              alt="df"
              width={170}
              height={120}
            />

            <div className="text-[#E3F6F5] pr-12">
              <div className="flex gap-2">
                <Image
                  src={"https://texnomart.uz/_nuxt/img/googleplay.2b150ef.svg"}
                  alt="df"
                  width={50}
                  height={50}
                />
                <Image
                  src={"https://texnomart.uz/_nuxt/img/appstore.c200a90.svg"}
                  alt="df"
                  width={50}
                  height={50}
                />
                <Image
                  src={"https://texnomart.uz/_nuxt/img/appgallery.166b7d5.svg"}
                  alt="df"
                  width={50}
                  height={50}
                />
              </div>

              <h2>Ilovani Yuklab olish</h2>
              <h2>QR codni skanerlang</h2>

              <Image
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAWCAYAAAC7ZX7KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgB1VXLbcJAEB2b35US3AHQQaggUAFJBfEFOBIf+SmmgriD0AGkgpgONh1w5pv30BIZS0YILFg/yR571559OzvzRiQj6Ha7Dq0lGYDruuVisfiz3W5fbckACoXCO8x0PB7P82I42u32i2VZz6vVqsZ3o1OCebvf72cgW/d9X3HM2JQ4ksXlH8kSRqYEi4xkd7tdMBqNJtE541KCZFFkjOwUZL34vFEpwTSgfCWRJYwhDDWoRtLAS/rOiJTodDouTI+NAVo7PfftQ4tOt9tPRFXW63UtqgZJeEiEdWG5aAgtytZwOJxc+u9dIxwh+gaiYbQhXIoTwlqsP3B52HUoKSFOFFcD/r/lCuSjDuGoxSrdbDZKbgR9lkqlFh4b8FuFDUD4aTAYLOQGWJQTOPriCxw3r4ms3rCTy+Wq2HAF/kiS3YoVH6CgFjj6paSAPBYoYyEHzyEWmkFiBJbHtoRd0mLuZDGMO/qRlmlEqyBLc9u2Q/hspplSJ2vzhijPQGKO4/J0tCpYmBEqY/xgY/8p3jCuQE5BO3/lTjgQBkm2RJKu9/t9JQbj0Jq1tASIVk8Mx7+sQRMnLBwxHH/THgE+tYJhcAAAAABJRU5ErkJggg=="
                }
                alt="sd"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[lightgrey] mt-7"></div>
      <div className="flex justify-between px-12 text-[#E3F6F5] py-6 container mx-auto">
        <p>
          2016-2025 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning
          ko'rsatilgan qiymati va ularni sotib <br />
          olish shartlari joriy sanaga amal qiladi
        </p>

        <div className="flex gap-3">
          <Image
            src={"https://texnomart.uz/_nuxt/img/uzcard.fbf7a3b.png"}
            alt="s"
            width={75}
            height={18}
          />
          <Image
            src={"https://texnomart.uz/_nuxt/img/humo.ce272fe.png"}
            alt="s"
            width={75}
            height={18}
          />
          <Image
            src={"https://texnomart.uz/_nuxt/img/payme.fac2924.png"}
            alt="s"
            width={75}
            height={18}
          />
          <Image
            src={"https://texnomart.uz/_nuxt/img/click.b558a2e.png"}
            alt="s"
            width={75}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
