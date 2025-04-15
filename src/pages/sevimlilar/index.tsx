"use client"
import { RootState } from '@/components/layout/store/typr'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Sevimlilar() {
    const cartLike =useSelector((state:RootState)=>state.cart.items)

    console.log(cartLike);
    

  return (
     
              <>
                {cartLike.map((item) => (
                  <div
                    key={item.id}
                    className="flex border-1 border-[lightgrey] w-[50%] mx-auto rounded-full    my-2 px-5  justify-between items-center py-2"
                  >
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.imageUrl}
                        width={70}
                        height={70}
                        alt="img"
                      />
                      <p className="text-2xl">{item.name}</p>
                    </div>
  
                    
  
                    <div className="flex gap-2 items-center">
                      <p className="text-xl font-bold font-mono">
                        {(item.count * item.price).toLocaleString("ru")} So`m
                      </p>
                   
                    </div>
                  </div>
                ))}
              </>
            
     
  )
}

export default Sevimlilar