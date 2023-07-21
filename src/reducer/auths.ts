import { produce } from "immer";
import { Signup } from "../interface/user";

const initialState = {
    isAuthenticated: true,
    isRegistered: false,
    user: null as Signup | null,
    formData: { email: "", password: "", name: "", confirmPassword: "" },
    form: { email: "", password: "", },
    users: null as Signup[] | null
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
            case "LOGOUT": // Thêm action LOGOUT để xử lý việc đăng xuất
                state.isAuthenticated = false;
                state.user = null;

                // Xóa thông tin đăng nhập khỏi localStorage khi đăng xuất
                localStorage.removeItem( "isAuthenticated" );
                localStorage.removeItem( "user" );
                break;
            case "UPDATE_FORM_DATA":
                state.form = {
                    ...state.form,
                    ...action.payload,
                };
                break;


            default:
                return state;
        }
    } );
};
export const singupReducer = ( state = initialState, action: any ) =>
{
    return produce( state, ( draftState ) =>
    {
        switch ( action.type )
        {
            case "SINGUP":
                draftState.isRegistered = true;
                draftState.users = draftState.users || []; // Đảm bảo users là một mảng trước khi thêm người dùng
                draftState.users.push( action.payload );
                break;

            case "UPDATE_FORM_DATA":
                draftState.formData = {
                    ...draftState.formData,
                    ...action.payload,
                };
                break;

            default:
                return draftState;
        }
    } );
};