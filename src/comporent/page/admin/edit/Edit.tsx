import { useEffect, useState } from 'react';
import { edit } from '../../../../action/product';
import { useAppDispatch, useAppSelector } from '../../../../store/hook';
import { useParams } from 'react-router-dom';
import { fetchCategory } from '../../../../action/category';
import { Dispatch } from 'redux';
import { Category } from '../../../../interface/category';

const EditProduct = () =>
{
    const { _id } = useParams<{ _id: any }>();

    const dispatch: Dispatch<any> = useAppDispatch();
    const products = useAppSelector( ( state ) => state.product.products.find( ( item ) => item._id === _id ) );
    const { category } = useAppSelector( ( state: any ) => state.category );

    console.log( products );


    // State để lưu trữ thông tin sản phẩm chỉnh sửa
    const [ editedProduct, setEditedProduct ] = useState( {
        _id: "",
        name: "",
        price: 0,
        chitiet: "",
        categoryId: "",
        img: ""

    } );
    console.log( editedProduct );

    useEffect( () =>
    {
        dispatch( fetchCategory() )
    }, [ dispatch ] )
    useEffect( () =>
    {
        if ( products )
        {
            setEditedProduct( {
                _id: products._id,
                name: products.name,
                price: products.price,
                chitiet: products.chitiet,
                categoryId: products.categoryId,
                img: products.img,
            } );
        }
    }, [ products ] );

    const handleCategoryChange = ( e: any ) =>
    {
        setEditedProduct( {
            ...editedProduct,
            categoryId: e.target.value,
        } );
    };



    const handleInputChange = ( e: any ) =>
    {
        const { name, value } = e.target;
        setEditedProduct( ( prevState ) => ( {
            ...prevState,
            [ name ]: value,
        } ) );
    };

    const handleUpdateProduct = () =>
    {
        // Gửi hành động để cập nhật thông tin sản phẩm
        dispatch( edit( editedProduct, ) );
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <input
                type="text"
                name="name"
                value={ editedProduct.name }
                onChange={ handleInputChange }
            />
            <input
                type="number"
                name="price"
                value={ editedProduct.price }
                onChange={ handleInputChange }
            />
            <input
                type="text"
                name="img"
                value={ editedProduct.img }
                onChange={ handleInputChange }
            />

            <textarea
                name="chitiet"
                value={ editedProduct.chitiet }
                onChange={ handleInputChange }
            />

            <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                    name="categoryId"
                    value={ editedProduct.categoryId }
                    onChange={ handleCategoryChange }
                    className="border rounded w-full py-2 px-3"
                >
                    <option value="">Chọn category</option>
                    { category.map( ( category: Category ) => (
                        <option key={ category._id } value={ category._id }>
                            { category.name }
                        </option>
                    ) ) }
                </select>
            </div>
            <button onClick={ handleUpdateProduct }>Update Product</button>
        </div>
    );
};

export default EditProduct;