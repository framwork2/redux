// productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Iproduct } from "../interface/product";
import { fetch, get, remove } from "../action/product";

const initialState = {
    products: [] as Iproduct[],
    searchKeyword: "", // Từ khóa tìm kiếm
    searchResults: [] as Iproduct[], // Kết quả tìm kiếm
};

const sliceProduct = createSlice( {
    name: "product",
    initialState,
    reducers: {
        addProduct: ( state, action ) =>
        {
            // Thêm sản phẩm mới vào danh sách sản phẩm
            state.products.push( action.payload );
        },
        updateProduct: ( state, action ) =>
        {
            const updatedProduct = action.payload;
            // Tìm và cập nhật sản phẩm trong danh sách sản phẩm dựa trên id
            state.products = state.products.map( ( product ) =>
                product._id === updatedProduct.id ? updatedProduct : product
            );
        },
        setSearchKeyword: ( state, action ) =>
        {
            state.searchKeyword = action.payload;
        },
        setSearchResults: ( state, action ) =>
        {
            state.searchResults = action.payload;
        },
    },
    extraReducers ( builder )
    {
        builder.addCase( fetch.fulfilled, ( state, action ) =>
        {
            state.products = action.payload;
        } );
        builder.addCase( get.fulfilled, ( state, action ) =>
        {
            // Cập nhật thông tin sản phẩm trong trạng thái dựa trên action.payload (nếu cần)
        } );
        builder.addCase( remove.fulfilled, ( state, action ) =>
        {
            const id = action.payload;
            // Xóa sản phẩm khỏi danh sách sản phẩm dựa trên id
            state.products = state.products.filter( ( item: any ) => item.id !== id );
        } );
    },
} );

export const { addProduct, updateProduct, setSearchKeyword, setSearchResults } =
    sliceProduct.actions;
export const productReducer = sliceProduct.reducer;
