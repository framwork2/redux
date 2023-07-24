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

    useEffect( () =>
    {
        dispatch( fetchCategory() );
    }, [ dispatch ] );

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
    const handleImageChange = ( e: any ) =>
    {
        // Lấy file đã chọn từ phần tử input
        const selectedFile = e.target.files[ 0 ];

        // Tạo đối tượng URL để tạo đường dẫn tạm thời cho hình ảnh
        const temporaryImageUrl = URL.createObjectURL( selectedFile );

        // Lưu đường dẫn tạm thời vào trạng thái productData
        setEditedProduct( {
            ...editedProduct,
            img: temporaryImageUrl,
        } );
    };
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
        dispatch( edit( editedProduct ) );
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    value={ editedProduct.name }
                    onChange={ handleInputChange }
                    className="border rounded py-2 px-3 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                    type="number"
                    name="price"
                    value={ editedProduct.price }
                    onChange={ handleInputChange }
                    className="border rounded py-2 px-3 w-full"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Details</label>
                <textarea
                    name="chitiet"
                    value={ editedProduct.chitiet }
                    onChange={ handleInputChange }
                    className="border rounded py-2 px-3 w-full h-32"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                    name="categoryId"
                    value={ editedProduct.categoryId }
                    onChange={ handleCategoryChange }
                    className="border rounded py-2 px-3 w-full"
                >
                    <option value="">Select category</option>
                    { category.map( ( category: Category ) => (
                        <option key={ category._id } value={ category._id }>
                            { category.name }
                        </option>
                    ) ) }
                </select>
            </div>
            <div className="mb-4">
                {/* Phần tử input cho phép tải lên hình ảnh */ }
                <input
                    type="file"
                    name="img"
                    onChange={ handleImageChange }
                />
            </div>
            {/* Hiển thị hình ảnh đã chọn (tạm thời) */ }
            { editedProduct.img && (
                <div className="mb-4">
                    <img
                        src={ editedProduct.img }
                        alt="Preview"
                        className="w-32 h-32 rounded"
                    />
                </div>
            ) }
            <button
                onClick={ handleUpdateProduct }
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Update Product
            </button>
        </div>
    );
};

export default EditProduct;
