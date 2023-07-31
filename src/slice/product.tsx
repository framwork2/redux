import { createSlice } from "@reduxjs/toolkit";
import { Iproduct } from "../interface/product";
import { fetch, get, remove } from "../action/product";
const initialState = {
    products: [] as Iproduct[]
}
const sliceProduct = createSlice(
    {
        name: "product",
        initialState,
        reducers: {},
        extraReducers ( builder )
        {
            builder.addCase( fetch.fulfilled, ( state, action ) =>
            {
                state.products = action.payload
            } )
            builder.addCase( get.fulfilled, ( state, action ) =>
            {


            } )
            builder.addCase( remove.fulfilled, ( state, action ) =>
            {
                const id = action.payload
                state.products = state.products.filter( ( item: any ) => item.id != id )
            } )

        },

    }
)
export const productReducer = sliceProduct.reducer