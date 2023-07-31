import Example1 from '../nav/products'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import { decrement, increment } from '../../../slice/cart'
import { Iproduct } from '../../../interface/product'


const Carts = () =>
{
    const dispatch = useAppDispatch()
    const { items } = useAppSelector( ( state ) => state.cart )

    return (
        <div>
            <Example1 />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">





                    {/* Sản phẩm 2 */ }

                    {/* Sản phẩm 3 */ }

                </div>
                {/* Giỏ hàng */ }
                <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

                { items.map( ( item: any ) =>
                (
                    <div key={ item._id } className="mt-8">
                        <ul>
                            <li className="flex justify-between items-center bg-white p-4 mb-4 shadow-md rounded-lg">
                                <div className="flex items-center">
                                    <img
                                        src={ item.img }
                                        alt="Product 1"
                                        className="w-12 h-12 object-cover rounded-lg"
                                    />
                                    <span className="text-xl font-semibold ml-4">{ item.name }</span>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={ () => dispatch( decrement( item._id ) ) } className="px-2 py-1 bg-indigo-500 text-white rounded-l-lg">
                                        -
                                    </button>
                                    <span className="px-4 py-2 border-t border-b border-gray-300">{ item.quantity }</span>
                                    <button onClick={ () => dispatch( increment( item._id ) ) } className="px-2 py-1 bg-indigo-500 text-white rounded-r-lg">
                                        +
                                    </button>
                                    <span className="text-gray-600 ml-4">{ item.price }</span>
                                </div>
                            </li>
                        </ul>
                        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">

                        </div>
                    </div>
                )
                ) }
                total: { items?.reduce( ( total, item ) => total + item.price * item.quantity, 0 ) }

                <div className="mt-8">
                    <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg">
                        Checkout
                    </button>
                </div>
            </div>

        </div >

    )
}

export default Carts