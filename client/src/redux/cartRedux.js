import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 1,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    
    //@desc => add to cart reducer

    addToCart: (state, action) => {
       console.log(action.payload.price);
        console.log(state.total);
      const itemInCart = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: state.quantity });
      }

      state.total = state.total + action.payload.price
    },


    //@desc => remove from cart reducer

    removeFromCart:(state,action)=>{
        
        state.products = state.products.filter((item)=>item._id !== action.payload)

        state.total -= action.payload.price
    },


     //@desc => increaseQnt 

     increaseQnt:(state,action)=>{
            
        const itemsInCart = state.products.find((item)=>item._id===action.payload._id)

        if(itemsInCart){
            itemsInCart.quantity++
        }

        state.total +=itemsInCart.price
     },

     //@desc => decreaseQnt

     decreaseQnt:(state,action)=>{

        const itemsInCart = state.products.find((item)=>item._id===action.payload._id)

        if(itemsInCart){
            if(itemsInCart.quantity > 1){
                itemsInCart.quantity--;
                state.total -=itemsInCart.price
            }
        }

     }

  },
});

export const { addToCart,removeFromCart,decreaseQnt,increaseQnt } = cartSlice.actions;
export default cartSlice.reducer;
