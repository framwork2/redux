import { produce } from "immer"
import { Iproduct } from "../interface/product"
const initialState = {
    products: [] as Iproduct[],
    error: "",
    productss: {
        name: "",
        chitiet: "",
        price: 0,



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
            case "edit/product":
                const updatedProducts = state.products.map( ( product ) =>
                    product._id === action.payload.id ? action.payload : product
                );
                return {
                    ...state,
                    products: updatedProducts,

                };


            case "add_form":
                state.productss = {
                    ...state.productss,
                    ...action.payload,
                };
                break;
            case "get/product":
                const products = action.payload;
                if ( products.length > 0 )
                {
                    const firstProduct = products[ 0 ];
                    state.productss = {
                        name: firstProduct.name,
                        chitiet: firstProduct.chitiet,
                        price: firstProduct.price,
                    };
                } else
                {
                    state.productss = initialState.productss;
                }
                break;

            default:
                state;
        }

    } )


}