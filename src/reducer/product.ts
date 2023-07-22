import { produce } from "immer"

export const productReducer = ( state = { products: [], error: "" }, action: any ) =>
{
    return produce( state, state =>
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

            default:
                state;
        }

    } )


}