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

            default:
                state;
        }

    } )


}