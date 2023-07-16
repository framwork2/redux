import { legacy_createStore as createStore, combineReducers } from 'redux'
import { produce } from "immer"
const productReducer = ( state = { products: [], error: "" }, action: any ) =>
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

const store = createStore( productReducer );
export default store