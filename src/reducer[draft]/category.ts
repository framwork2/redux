import { produce } from "immer"
import { Category } from "../interface/category"
const initialState = {
    category: [] as Category[],
    selectedCategoryId: null, // Mã danh mục được chọn hiện tại (ban đầu là null)
    currentPage: 1,
    itemsPerPage: 20,
    products: []
}

// reducers/categoryReducer.ts
export const categoryReducer = ( state = initialState, action: any ) =>
{
    return produce( state, ( draft ) =>
    {
        switch ( action.type )
        {
            case "fetch/category":
                draft.category = action.payload;
                break;
            case "delete/category":
                const id = action.payload;
                draft.category = draft.category.filter( ( item: any ) => item.id !== id );
                break;
            case "add/category":
                draft.category = draft.category || []; // Đảm bảo users là một mảng trước khi thêm người dùng
                draft.category.push( action.payload );
                break;
            case "SELECT_CATEGORY":
                draft.selectedCategoryId = action.id; // Cập nhật selectedCategoryId khi chọn danh mục
                draft.currentPage = 1; // Reset trang về 1 khi chọn danh mục mới
                break;
            default:

                break;
        }
    } );
};