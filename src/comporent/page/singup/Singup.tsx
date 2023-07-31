import { useState } from "react";
import { Dk } from "../../../action/auth";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const Signup = () =>
{
    const dispatch = useAppDispatch();

    const [ errorMessage, setErrorMessage ] = useState( "" ); // State để lưu trữ thông báo lỗi

    const { register, handleSubmit, formState: { errors } } = useForm( {
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    } );

    // Định nghĩa schema xác thực sử dụng Yup
    const validationSchema = yup.object().shape( {
        name: yup.string().required( "Vui lòng nhập tên người dùng" ),
        email: yup.string().email( "Email không hợp lệ" ).required( "Vui lòng nhập email" ),
        password: yup.string().required( "Vui lòng nhập mật khẩu" ).min( 6, "Mật khẩu phải có ít nhất 6 ký tự" ),
        confirmPassword: yup.string().oneOf( [ yup.ref( "password" ) ], "Mật khẩu xác nhận không khớp" ),
    } );

    const onSubmit = async ( data: any ) =>
    {
        try
        {
            // Xác thực dữ liệu form với schema xác thực
            await validationSchema.validate( data, { abortEarly: false } );

            // Nếu xác thực thành công, gửi action Dk
            dispatch( Dk( data ) );
        } catch ( validationErrors: any )
        {
            // Nếu xác thực thất bại, hiển thị thông báo lỗi cho người dùng
            const fieldErrors = validationErrors.inner.reduce( ( acc: any, error: any ) =>
            {
                acc[ error.path ] = error.message;
                return acc;
            }, {} );

            // Set state errorMessage với thông báo lỗi
            setErrorMessage( fieldErrors.name || fieldErrors.email || fieldErrors.password || fieldErrors.confirmPassword );
        }
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <h2>Đăng nhập</h2>
                <div className="mb-3">
                    <label htmlFor="name">Tên người dùng</label>
                    <input className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2" type="text" { ...register( "name" ) } />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2" type="email" { ...register( "email" ) } />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Mật khẩu</label>
                    <input className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2" type="password" { ...register( "password" ) } />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                    <input className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2" type="password" { ...register( "confirmPassword" ) } />
                </div>
                { errorMessage && <p className="error-message">{ errorMessage }</p> } {/* Render thông báo lỗi */ }
                <div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >Đăng ký</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
