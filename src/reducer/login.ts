
import { produce } from "immer";

const initialState = {
    isAuthenticated: false,
    user: null,
};

export const LoginReducer = ( state = initialState, action: any ) =>
{
    return produce( state, ( state ) =>
    {
        switch ( action.type )
        {
            case "LOGIN":
                state.isAuthenticated = true;
                state.user = action.payload;

                // Lưu trạng thái đăng nhập vào localStorage
                localStorage.setItem( "isAuthenticated", "true" );
                localStorage.setItem( "user", JSON.stringify( action.payload ) );
                break;

            default:
                return state;
        }
    } );
};