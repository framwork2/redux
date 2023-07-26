import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hook';
import { useParams, useNavigate } from 'react-router-dom';
import { edit, fetchCategory } from '../../../../action/category';
import { Dispatch } from 'redux';
import { Category } from '../../../../interface/category';
import Nav from '../navAdmin/Nav';
import { Iproduct } from '../../../../interface/product';

const EditCate = () =>
{
    const navigate = useNavigate()

    const { _id } = useParams<{ _id: any }>();

    const dispatch: Dispatch<any> = useAppDispatch();
    const product = useAppSelector( ( state ) => state.category.category.find( ( item ) => item._id === _id ) );
    const { products } = useAppSelector( ( state ) => state.product );

    console.log( products );

    // State để lưu trữ thông tin sản phẩm chỉnh sửa
    const [ editedCate, setEditedCate ] = useState( {
        _id: "",
        name: "",
        products: ""
    } );

    useEffect( () =>
    {
        dispatch( fetchCategory() );
    }, [ dispatch ] );

    useEffect( () =>
    {
        if ( product )
        {
            setEditedCate( {
                _id: product._id,
                name: product.name,
                products: product.name

            } );
        }
    }, [ products ] );

    const handleCategoryChange = ( e: any ) =>
    {
        setEditedCate( {
            ...editedCate,
            products: e.target.value,
        } );
    };

    const handleInputChange = ( e: any ) =>
    {
        const { name, value } = e.target;
        setEditedCate( ( prevState ) => ( {
            ...prevState,
            [ name ]: value,
        } ) );
    };

    const handleUpdateProduct = () =>
    {
        // Gửi hành động để cập nhật thông tin sản phẩm
        dispatch( edit( editedCate ) );
        navigate( "/admin" )
    };

    return (
        <div>
            <Nav />
            <div className="max-w-md mx-auto p-4">
                <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={ editedCate.name }
                        onChange={ handleInputChange }
                        className="border rounded py-2 px-3 w-full"
                    />
                </div>



                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        name="categoryId"
                        value={ editedCate.products }
                        onChange={ handleCategoryChange }
                        className="border rounded py-2 px-3 w-full"
                    >
                        <option value="">Select category</option>
                        { products.map( ( category: Iproduct ) => (
                            <option key={ category._id } value={ category._id }>
                                { category.name }
                            </option>
                        ) ) }
                    </select>
                </div>

                <button
                    onClick={ handleUpdateProduct }
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Update Product
                </button>
            </div>
        </div>
    );
};

export default EditCate;
