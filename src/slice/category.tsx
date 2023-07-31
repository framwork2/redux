import { createSlice } from "@reduxjs/toolkit"
import { Category } from "../interface/category"
import { add, edit, fetchCategory, get, remove } from "../action/category"

const initialState = {
    category: [] as Category[],
    selectedCategoryId: null, // Mã danh mục được chọn hiện tại (ban đầu là null)
    currentPage: 1,
    itemsPerPage: 20,
}
const categorySlice = createSlice( {
    name: "category",
    initialState,
    reducers: {},
    extraReducers ( builder )
    {
        builder.addCase( fetchCategory.pending, ( state, action ) =>
        {

        } )
        builder.addCase( fetchCategory.fulfilled, ( state, action ) =>
        {
            state.category = action.payload
        } )
        builder.addCase( add.fulfilled, ( state, action ) =>
        {
            state.category.push( action.payload );
        } )
        builder.addCase( edit.fulfilled, ( state, action ) =>
        {
        } )
        builder.addCase( remove.fulfilled, ( state, action ) =>
        {
            const id = action.payload;
            state.category = state.category.filter( ( item: any ) => item.id !== id );
        } )
        builder.addCase( get.fulfilled, ( state, action ) =>
        {

        } )
    },

} )
export const categoryReducer = categorySlice.reducer
