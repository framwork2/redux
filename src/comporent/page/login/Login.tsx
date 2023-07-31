import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signin } from "../../../action/auth";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const Login = () =>
{
    const history = useNavigate();
    const dispatch = useAppDispatch();

    const validationSchema = yup.object().shape( {
        email: yup.string().required( "Email không được để trống" ).email( "Email không hợp lệ" ),
        password: yup.string().required( "Mật khẩu không được để trống" ).min( 6, "Mật khẩu phải ít nhất 6 ký tự" ),
    } );

    const { register, handleSubmit, formState: { errors } } = useForm( {
        resolver: async ( data ) =>
        {
            try
            {
                await validationSchema.validate( data, { abortEarly: false } );
                return {
                    values: data,
                    errors: {},
                };
            } catch ( validationErrors: any )
            {
                const fieldErrors = validationErrors.inner.reduce( ( acc: any, error: any ) =>
                {
                    acc[ error.path ] = error.message;
                    return acc;
                }, {} );
                return {
                    values: {},
                    errors: fieldErrors,
                };
            }
        },
    } );

    const onSubmit = async ( data: any ) =>
    {
        const response = await dispatch( Signin( data ) );

        if ( response.payload )
        {
            history( "/" );
        }
        // If the login fails, the user remains on the login page (admin page).
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <h2 className="text-3xl font-bold mb-4">Đăng nhập</h2>

                <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2" type="email" { ...register( 'email' ) } />
                    { errors.email && <p className="text-red-500">{ errors.email }</p> }
                </div>
                <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2" type="password" { ...register( 'password' ) } />
                    { errors.password && <p className="text-red-500">{ errors.password }</p> }
                </div>

                <div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >Đăng nhập</button>
                </div>
            </form>
        </div>
    )
};

export default Login;
