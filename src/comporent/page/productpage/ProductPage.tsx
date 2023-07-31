import { useEffect, useState } from 'react'
import Example1 from '../nav/products'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import { fetchCategory } from '../../../action/category'
import { Dispatch } from 'redux'
import { fetch } from '../../../action/product'

type Props = {}

const ProductPage = ( props: Props ) =>
{
    const dispatch: Dispatch<any> = useAppDispatch();
    const { category } = useAppSelector( state => state.category );
    const { products } = useAppSelector( state => state.product );
    console.log( products );

    console.log( category );
    useEffect( () =>
    {
        dispatch( fetch() );
        dispatch( fetchCategory() );
    }, [ dispatch ] );

    const [ selectedCategoryId, setSelectedCategoryId ] = useState<string | null>( null );

    // Lọc danh sách sản phẩm dựa vào danh mục được chọn
    const productsToShow = selectedCategoryId
        ? products.filter( product => product.categoryId === selectedCategoryId )
        : products;

    // Xử lý khi người dùng click vào một danh mục
    const handleCategoryClick = ( categoryId: string ) =>
    {
        setSelectedCategoryId( categoryId );
    };


    return (
        <div>
            <Example1 />
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        { category.map( ( item ) => (
                            <a
                                key={ item._id }
                                className={ `mr-5 hover:text-gray-900 ${ item._id === selectedCategoryId ? "text-indigo-500" : ""
                                    }` }

                                onClick={ () => handleCategoryClick( item._id! ) } // Xử lý sự kiện khi click vào danh mục
                            >
                                { item.name }
                            </a>
                        ) ) }
                    </nav>

                </div>
            </header>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        { productsToShow.map( ( product ) => (
                            <div className="xl:w-1/4 md:w-1/2 p-4" key={ product._id }>
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    {/* Display the product image */ }
                                    <img
                                        className="w-20 h-20 object-cover object-center mb-6"
                                        src={ product.img } // Assuming `product.image` contains the image URL
                                        alt={ product.name }
                                    />

                                    {/* Display the rest of the product information */ }
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                        SUBTITLE
                                    </h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                        { product.name }
                                    </h2>
                                    <p className="leading-relaxed text-base">{ product.chitiet }</p>
                                </div>
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage