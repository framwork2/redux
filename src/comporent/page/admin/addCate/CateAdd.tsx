import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hook';
import { Dispatch } from 'redux';
import { useNavigate } from "react-router-dom"
import { add } from '../../../../action/category';
import Nav from '../navAdmin/Nav';
import { fetch } from '../../../../action/product';
import { Iproduct } from '../../../../interface/product';

const CateAdd = () =>
{
    const [ cateData, setcateData ] = useState( {
        name: '',
        products: ""

    } );
    const navigate = useNavigate()

    const dispatch: Dispatch<any> = useAppDispatch();
    const { products } = useAppSelector( ( state ) => state.product )
    useEffect( () =>
    {
        dispatch( fetch() )
    }, [ dispatch ] )

    const handleSubmit = ( e: any ) =>
    {
        e.preventDefault();
        // Kiểm tra dữ liệu đầu vào ở đây nếu cần

        // Gửi action để thêm sản phẩm mới vào Redux Store
        dispatch( add( cateData ) );
        navigate( "/admin" )

        // Xóa trạng thái sau khi thêm sản phẩm thành công
        setcateData( {
            name: '',
            products: ""

        } );
    };

    const handleChange = ( e: any ) =>
    {
        const { name, value } = e.target;
        setcateData( {
            ...cateData,
            [ name ]: value,

        } );
    };
    const handleproductChange = ( e: any ) =>
    {
        setcateData( {
            ...cateData,
            products: e.target.value,
        } );
    };
    return (
        <div>
            <Nav />
            <form
                className="max-w-md mx-auto p-4"
                onSubmit={ handleSubmit }
            >
                <div className="mb-4">
                    <input
                        className="border rounded w-full py-2 px-3"
                        type="text"
                        placeholder="Tên danh muc"
                        name="name"
                        value={ cateData.name }
                        onChange={ handleChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">sản phẩm </label>
                    <select
                        name="categoryId"
                        value={ cateData.products }
                        onChange={ handleproductChange }
                        className="border rounded w-full py-2 px-3"
                    >
                        <option value="">Chọn sản phẩm </option>
                        { products.map( ( category: Iproduct ) => (
                            <option key={ category._id } value={ category._id }>
                                { category.name }
                            </option>
                        ) ) }
                    </select>
                </div>





                {/* Hiển thị hình ảnh đã chọn (tạm thời) */ }

                <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    type="submit"
                >
                    Thêm danh mục
                </button>
            </form>
        </div>
    );
};

export default CateAdd;
