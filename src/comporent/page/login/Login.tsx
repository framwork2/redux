// Login.js (hoặc Login.tsx nếu bạn đang sử dụng TypeScript)

import { useState } from "react";
import { Signin } from "../../../action/auth";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import * as yup from "yup"
const Login = () =>
{
    const dispatch = useAppDispatch();
    const formData = useAppSelector( ( state ) => state.login.form )
    const handleInputChange = ( e: any ) =>
    {
        const { name, value } = e.target;
        dispatch( { type: "UPDATE_FORM_DATA", payload: { [ name ]: value } } ); // Cập nhật dữ liệu trong Redux store
        setErrors( ( prevErrors ) => ( { ...prevErrors, [ name ]: "" } ) );
    };
    const [ errors, setErrors ] = useState( {
        email: null,
        password: null,

    } );
    const validationSchema = yup.object().shape( {
        email: yup.string().email( "Email không hợp lệ" ).required( "Vui lòng nhập email" ),
        password: yup.string().required( "Vui lòng nhập mật khẩu" ).min( 6, "Mật khẩu phải có ít nhất 6 ký tự" ),

    } );
    const handleLogin = () =>
    {
        validationSchema
            .validate( formData, { abortEarly: false } )
            .then( () =>
            {
                // Nếu validate thành công và không có lỗi, gửi thông tin đăng ký lên store
                dispatch( Signin( formData ) );
            } )
            .catch( ( error ) =>
            {
                // Nếu validate không thành công, hiển thị thông báo lỗi tương ứng
                const errorMessages = {};
                error.inner.forEach( ( err: any ) =>
                {
                    errorMessages[ err.path ] = err.message;
                } );
                setErrors( errorMessages ); // Cập nhật state errors để hiển thị thông báo lỗi
            } );
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <input
                type="text"
                name="email"
                value={ formData.email }
                onChange={ handleInputChange }
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2"
            />
            { errors.email && <div>{ errors.email }</div> }
            <input
                type="password"
                name="password"
                value={ formData.password }
                onChange={ handleInputChange }
                placeholder="Password"
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2"
            />
            { errors.password && <div>{ errors.password }</div> }
            <button
                onClick={ handleLogin }
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
