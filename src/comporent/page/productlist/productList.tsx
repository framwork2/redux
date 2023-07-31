import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../showInfor";
import { add } from "../../../slice/cart";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { Iproduct } from "../../../interface/product";
import { fetch } from "../../../action/product";// Import các import khác

export default function Example ()
{
    const dispatch = useAppDispatch();
    const { products, error } = useAppSelector( ( state: any ) => state.product );
    const [ searchKeyword, setSearchKeyword ] = useState( "" );
    const [ searchResults, setSearchResults ] = useState<Iproduct[]>( [] );

    useEffect( () =>
    {
        dispatch( fetch() );
    }, [ dispatch ] );

    const handleSearch = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const keyword = event.target.value;
        setSearchKeyword( keyword );

        // Tìm kiếm trong danh sách sản phẩm dựa trên từ khóa
        const filteredProducts = products.filter( ( product: Iproduct ) =>
            product.name.toLowerCase().includes( keyword.toLowerCase() )
        );
        setSearchResults( filteredProducts );
    };

    return (
        <div className="bg-white">
            {/* ... */ }
            <div className="flex justify-center">
                <input
                    className="border rounded-lg px-4 py-2 w-64 shadow-sm focus:outline-none focus:ring focus:border-blue-300"

                    type="text"
                    value={ searchKeyword }
                    onChange={ handleSearch }
                    placeholder="Enter search keyword..."
                />
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {/* Hiển thị tất cả sản phẩm nếu không có từ khóa tìm kiếm */ }
                { !searchKeyword
                    ? products.map( ( product: Iproduct ) => (
                        <a key={ product._id } href="" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={ product.img }
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{ product.name }</h3>
                            <h3 className="mt-4 text-sm text-gray-700">{ product.chitiet }</h3>

                            <p className="mt-1 text-lg font-medium text-gray-900">{ product.price }</p>
                            <Link to={ "/cart" }><Button type="danger" onclick={ () => dispatch( add( { ...product, quantity: 1 } ) ) } >addCart</Button></Link>
                            <Link to={ "product/" + product._id }><Button type="primary" >Review</Button></Link>                        </a>
                    ) )
                    : // Hiển thị kết quả tìm kiếm nếu có từ khóa tìm kiếm
                    searchResults.map( ( product: Iproduct ) => (
                        <a key={ product._id } href="" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={ product.img }
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{ product.name }</h3>
                            <h3 className="mt-4 text-sm text-gray-700">{ product.chitiet }</h3>

                            <p className="mt-1 text-lg font-medium text-gray-900">{ product.price }</p>
                            <Link to={ "/cart" }><Button type="danger" onclick={ () => dispatch( add( { ...product, quantity: 1 } ) ) } >addCart</Button></Link>
                            <Link to={ "product/" + product._id }><Button type="primary" >Review</Button></Link>                        </a>
                    ) ) }
            </div>
        </div>
    );
}
