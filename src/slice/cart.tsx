// slice/cart.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../interface/cart";
import { Iproduct } from "../interface/product";

interface CartItem extends Iproduct
{
    quantity: number;
}

const initialState = {
    items: [] as CartItem[],
};

const sliceCart = createSlice( {
    name: "cart",
    initialState,
    reducers: {
        increment: ( state, action: PayloadAction<number> ) =>
        {
            const itemToUpdate = state.items.find( ( item ) => item._id === action.payload );
            if ( itemToUpdate )
            {
                itemToUpdate.quantity++;
            }
        },
        decrement: ( state, action: PayloadAction<number> ) =>
        {
            const itemToUpdate = state.items.find( ( item ) => item._id === action.payload );
            if ( itemToUpdate )
            {
                itemToUpdate.quantity--;
                if ( itemToUpdate.quantity < 1 )
                {
                    const comfim = window.confirm( "Bạn có muốn xóa sản phẩm này?" );
                    if ( comfim )
                    {
                        state.items = state.items.filter( ( item ) => item._id !== action.payload );
                    } else
                    {
                        itemToUpdate.quantity = 1;
                    }
                }
            }
        },
        add: ( state, action: PayloadAction<Iproduct> ) =>
        {
            const newProduct = action.payload;
            const existProduct = state.items.find(
                ( item ) => item._id === newProduct._id
            );

            if ( !existProduct )
            {
                state.items.push( { ...newProduct, quantity: 1 } );
            } else
            {
                existProduct.quantity++;
            }
        },
        removeItem: ( state, action ) =>
        {
            const index = state.items.findIndex( item => item._id === action.payload.id );
            console.log( index );

            if ( index !== -1 )
            {
                state.items.splice( index, 1 );
            }
        },
        // Các reducers khác (nếu có)

    },
} );

export const { add, increment, decrement } = sliceCart.actions;
export const reducerCart = sliceCart.reducer;
