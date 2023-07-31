import { createSlice } from "@reduxjs/toolkit";
import { Dk, Signin } from "../action/auth";
import { Login } from "../interface/user";

const initialState = {
    current: [] as Login[],
    isAuthenticated: false,
};

const authSlice = createSlice( {
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: ( builder ) =>
    {
        // Xử lý hành động Dk

        // Xử lý hành động Signin
        builder.addCase( Signin.pending, ( state, action ) =>
        {
            // Xử lý khi action Signin đang trong quá trình xử lý (pending)
        } );
        builder.addCase( Signin.fulfilled, ( state, action ) =>
        {
            // Xử lý khi action Signin đã thành công (fulfilled)
            state.current = action.payload;
            state.isAuthenticated = true; // Đã đăng nhập thành công, isAuthenticated là true
            const user = action.payload;
            if ( user )
            {
                sessionStorage.setItem( "user", JSON.stringify( user ) );
            }
        } );
        builder.addCase( Signin.rejected, ( state, action ) =>
        {
            // Xử lý khi action Signin bị từ chối (rejected)
            state.isAuthenticated = false; // Không đăng nhập thành công, isAuthenticated là false
            sessionStorage.removeItem( "user" ); // Xóa thông tin tài khoản trong sessionStorage (nếu có)
        } );
    },
} );

export const authReducer = authSlice.reducer;
