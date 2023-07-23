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
                    <input
                        className="border rounded w-full py-2 px-3"
                        type="text"
                        placeholder="URL ảnh sản phẩm"
                        name="img"
                        value={ productData.img }
                        onChange={ handleChange }
                    />
                </div>
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
