import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../slice/product';
import { categoryReducer } from '../slice/category';
import { combineReducers } from '@reduxjs/toolkit';
import
{
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { reducerCart } from '../slice/cart';
import { authReducer } from '../slice/auth';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'cart', ]
}
const Root = combineReducers(
    {
        product: productReducer,
        login: authReducer,
        category: categoryReducer,
        cart: reducerCart
    }
)
const persistedReducer = persistReducer( persistConfig, Root )
export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: ( getDefaultMiddleware ) =>
            getDefaultMiddleware( {
                serializableCheck: {
                    ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
                },
            } ),
    }
)
export default persistStore( store );
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch




