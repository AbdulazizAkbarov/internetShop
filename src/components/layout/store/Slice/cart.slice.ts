import { createSlice } from "@reduxjs/toolkit"


type CartsliceType={
    sumPrice:number
    items:CartItemType[]
}

type CartItemType={
    product_id:number
    qty:number
    total_price:number
    product:ProductType
}

type ProductType={
    id:number
    name:string
    price:number
    imageUrl:string
}


const initialState:CartsliceType={
        items:[
            {
                product_id:1,
                product:{
                    id:1,
                    imageUrl:"",
                    name:"asd",
                    price:23
                },
                qty:5,
                total_price:100,
            },

            {
                product_id:2,
                product:{
                    id:2,
                    imageUrl:"",
                    name:"asdsd",
                    price:25
                },
                qty:5,
                total_price:100,
            },
        ],
        sumPrice:1000
    }


export  const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
   
    reducers:{
        addToCad:(state,{payload})=>{

        }
    },
})