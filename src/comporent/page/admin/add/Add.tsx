import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hook';
import { add } from '../../../../action/product';
import { Dispatch } from 'redux';
import { fetchCategory } from '../../../../action/category';
import { Category } from '../../../../interface/category';

const Add = () =>
{
    const [ productData, setProductData ] = useState( {
        name: '',
        size: "",
        price: 0,
        categoryId: '',
        chitiet: '',
        img: '',
    } );


    const dispatch: Dispatch<any> = useAppDispatch();
    useEffect( () =>
    {
        dispatch( fetchCategory() )
    }, [ dispatch ] )
    const { category } = useAppSelector( ( state: any ) => state.category );

    const handleSubmit = ( e: any ) =>
    {
        e.preventDefault();
        // Kiểm tra dữ liệu đầu vào ở đây nếu cần

        // Gửi action để thêm sản phẩm mới vào Redux Store
        dispatch( add( productData ) );

        // Xóa trạng thái sau khi thêm sản phẩm thành công
        setProductData( {
            name: '',
            size: '',
            price: 0,
            categoryId: '',
            chitiet: '',
            img: '',
        } );
    };

    const handleChange = ( e: any ) =>
    {
        const { name, value } = e.target;
        setProductData( {
            ...productData,
            [ name ]: value,
        } );
    };
    const handleImageChange = ( e: any ) =>
    {
        // Lấy file đã chọn từ phần tử input
        const selectedFile = e.target.files[ 0 ];

        // Tạo đối tượng URL để tạo đường dẫn tạm thời cho hình ảnh
        const temporaryImageUrl = URL.createObjectURL( selectedFile );

        // Lưu đường dẫn tạm thời vào trạng thái productData
        setProductData( {
            ...productData,
            img: temporaryImageUrl,
        } );
    };
    const handleCategoryChange = ( e: any ) =>
    {
        setProductData( {
            ...productData,
            categoryId: e.target.value,
        } );
    };
    return (
        <div>
            <form
                className="max-w-md mx-auto p-4"
                onSubmit={ handleSubmit }
            >
                <div className="mb-4">
                    <input
                        className="border rounded w-full py-2 px-3"
                        type="text"
                        placeholder="Tên sản phẩm"
                        name="name"
                        value={ productData.name }
                        onChange={ handleChange }
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="border rounded w-full py-2 px-3"
                        type="text"
                        placeholder="Giá sản phẩm"
                        name="price"
                        value={ productData.price }
                        onChange={ handleChange }
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="border rounded w-full py-2 px-3"
                        type="text"
                        placeholder="chitiet"
                        name="chitiet"
                        value={ productData.chitiet }
                        onChange={ handleChange }
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="border rounded w-full py-2 px-3"
                        type="text"
                        placeholder="size"
                        name="size"
                        value={ productData.size }
                        onChange={ handleChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                        name="categoryId"
                        value={ productData.categoryId }
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

                <div className="mb-4">
                    {/* Phần tử input cho phép tải lên hình ảnh */ }
                    <input
                        type="file"
                        name="img"
                        onChange={ handleImageChange }
                    />
                </div>
                {/* Hiển thị hình ảnh đã chọn (tạm thời) */ }
                { productData.img && (
                    <div className="mb-4">
                        <img
                            src={ productData.img }
                            alt="Preview"
                            className="w-32 h-32 rounded"
                        />
                    </div>
                ) }
                <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    type="submit"
                >
                    Thêm sản phẩm
                </button>
            </form>
        </div>
    );
};

export default Add;
