import { produce } from "immer"
import { Iproduct } from "../interface/product"
const initialState = {
    products: [] as Iproduct[],
    error: "",
    productss: {
        name: "",
        chitiet: "",
        price: "",


    }
}
export const productReducer = ( state = initialState, action: any ) =>
{
    return produce( state, ( state ) =>
    {
        switch ( action.type )
        {
            case "fetch/product":
                state.products = action.payload
                break;
            case "delete/product":
                const id = action.payload
                state.products = state.products.filter( ( item: any ) => item.id != id )
                break;
            case "add/product":
                state.products = state.products || []; // Đảm bảo users là một mảng trước khi thêm người dùng

                state.products.push( action.payload )
                break;
            case "add_form":
                state.productss = {
                    ...state.productss,
                    ...action.payload,
                };
                break;

            default:
                state;
        }

    } )


}