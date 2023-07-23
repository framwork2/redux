import { produce } from "immer"
import { Category } from "../interface/category"
const initialState = {
    category: [] as Category[]
}

export const categoryReducer = ( state = initialState, action: any ) =>
{
    return produce( state, ( state ) =>
    {
        switch ( action.type )
        {
            case "fetch/category":
                state.category = action.payload
                break;
            case "delete/category":
                const id = action.payload
                state.category = state.category.filter( ( item: any ) => item.id != id )
                break;
            case "add/category":
                state.category = state.category || []; // Đảm bảo users là một mảng trước khi thêm người dùng

                state.category.push( action.payload )
                break;


            default:
                state;
        }

    } )
}