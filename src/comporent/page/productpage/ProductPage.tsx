import { useEffect } from 'react'
import Example1 from '../nav/products'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import { fetchCategory, get, selectCategory } from '../../../action/category'
import { Dispatch } from 'redux'
import { fetch } from '../../../action/product'

type Props = {}

const ProductPage = ( props: Props ) =>
{
    const dispatch: Dispatch<any> = useAppDispatch();
    const { category, selectedCategoryId, currentPage, itemsPerPage } = useAppSelector(
        ( state ) => state.category
    );
    const { products } = useAppSelector( ( state ) => state.product );
    console.log( category );
    useEffect( () =>
    {
        dispatch( fetch() )
        dispatch( fetchCategory() )
    }, [ dispatch ] )



    const startIndex = ( currentPage - 1 ) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    const filteredProducts = selectedCategoryId
        ? products.filter( ( product ) => product?.categoryId === selectedCategoryId
        )
        : products;
    console.log( selectedCategoryId );



    const productsToShow = filteredProducts.slice( startIndex, endIndex );

    const handleCategoryClick = ( categoryId: any ) =>
    {


        const selectedCategorys = category.find( ( cat ) => cat._id === categoryId );

        if ( selectedCategorys )
        {
            dispatch( selectCategory( selectedCategorys ) );
            console.log( selectedCategorys );


        }

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

                                onClick={ () => handleCategoryClick( item._id ) } // Xử lý sự kiện khi click vào danh mục
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
                                    {/* Hiển thị thông tin sản phẩm */ }
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                        SUBTITLE
                                    </h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                        { product.name }
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        { product.chitiet }
                                    </p>
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