import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { productReducer } from "../reducer/product";
import { LoginReducer, singupReducer } from '../reducer/auths';
import { categoryReducer } from '../reducer/category';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__( {
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        } )
        : compose;
const enhancer = composeEnhancers(
    applyMiddleware( thunk ),
    // other store enhancers if any
);

const Root = combineReducers(
    {
        product: productReducer,
        login: LoginReducer,
        singup: singupReducer,
        category: categoryReducer
    }
)
const store = createStore( Root, enhancer );
export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
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
