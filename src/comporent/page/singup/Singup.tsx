import { useState } from "react";
import { Dk } from "../../../action/auth";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import * as yup from "yup";

const Signup = () =>
{
    const dispatch = useAppDispatch();
    const user = useAppSelector( ( state ) => state.singup.formData );
    const [ errors, setErrors ] = useState( {
        email: null,
        name: null,
        password: null,
        confirmPassword: null,
    } );
    const validationSchema = yup.object().shape( {
        email: yup.string().email( "Email không hợp lệ" ).required( "Vui lòng nhập email" ),
        name: yup.string().required( "Vui lòng nhập tên" ),
        password: yup.string().required( "Vui lòng nhập mật khẩu" ).min( 6, "Mật khẩu phải có ít nhất 6 ký tự" ),
        confirmPassword: yup
            .string()
            .oneOf( [ yup.ref( "password" ) ], "Mật khẩu xác nhận không khớp" )
            .required( "Vui lòng xác nhận mật khẩu" ),
    } );

    const handleInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const { name, value } = event.target;
        dispatch( { type: "UPDATE_FORM_DATA", payload: { [ name ]: value } } );

        // Xóa thông báo lỗi khi người dùng thay đổi dữ liệu
        setErrors( ( prevErrors ) => ( { ...prevErrors, [ name ]: "" } ) );
    };

    const handleSingup = () =>
    {
        // Validate dữ liệu nhập vào
        validationSchema
            .validate( user, { abortEarly: false } )
            .then( () =>
            {
                // Nếu validate thành công và không có lỗi, gửi thông tin đăng ký lên store
                dispatch( Dk( user ) );
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
            <h1 className="text-3xl font-bold mb-4">Signup</h1>
            <input
                type="email"
                name="email"
                value={ user.email }
                onChange={ handleInputChange }
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2"
            />
            { errors.email && <div className="text-red-500">{ errors.email }</div> }
            <input
                type="text"
                name="name"
                value={ user.name }
                onChange={ handleInputChange }
                placeholder="name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2"
            />
            { errors.name && <div className="text-red-500">{ errors.name }</div> }
            <input
                type="password"
                name="password"
                value={ user.password }
                onChange={ handleInputChange }
                placeholder="password"
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2"
            />
            { errors.password && <div className="text-red-500">{ errors.password }</div> }
            <input
                type="password"
                name="confirmPassword"
                value={ user.confirmPassword }
                onChange={ handleInputChange }
                placeholder="confirmPassword"
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 mb-2"
            />
            { errors.confirmPassword && <div className="text-red-500">{ errors.confirmPassword }</div> }
            <button
                onClick={ handleSingup }
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                Signup
            </button>
        </div>
    );
};

export default Signup;
