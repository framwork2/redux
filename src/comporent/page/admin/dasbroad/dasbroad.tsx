import { useEffect } from 'react'
import { Button } from '../../../showInfor'
import { AiTwotoneDelete, AiFillPlusSquare, AiOutlineInteraction } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../../../store/hook';
import { fetch, remove } from '../../../../action/product';
import { Dispatch } from 'redux';
import { Iproduct } from '../../../../interface/product';
import { Link } from 'react-router-dom';




const Dasbroad = () =>
{
    const { products } = useAppSelector( ( state: any ) => state.product )
    console.log( products );

    const dispatch: Dispatch<any> = useAppDispatch()
    useEffect( () =>
    {
        dispatch( fetch() )
    }, [ dispatch ] )
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={ 2 }
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Button
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={ 2 }
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </header>


            <section className="text-gray-600 body-font">
                <div className="container px-8 py-24 mx-auto mt-(-100)">
                    <div className="lg:w-3/4 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-6 py-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                        stt
                                    </th>
                                    <th className="px-6 py-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                        id
                                    </th>
                                    <th className="px-6 py-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        name
                                    </th>
                                    <th className="px-6 py-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Price
                                    </th>
                                    <th className="px-6 py-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Details
                                    </th>
                                    <th className="px-6 py-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Image
                                    </th>
                                    <th className="px-6 py-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Category ID
                                    </th>
                                    <th className="px-6 py-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                    </th>

                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br" />
                                </tr>
                            </thead>
                            <tbody>
                                { products.map( ( item: Iproduct, index: any ) => (
                                    <tr key={ item._id }>
                                        <td className="border-t-2 border-gray-200 px-6 py-4">{ index + 1 }</td>

                                        <td className="border-t-2 border-gray-200 px-6 py-4">{ item._id }</td>
                                        <td className="border-t-2 border-gray-200 px-6 py-4">{ item.name }</td>
                                        <td className="border-t-2 border-gray-200 px-6 py-4">{ item.price }</td>
                                        <td className="border-t-2 border-gray-200 px-6 py-4">{ item.chitiet }</td>
                                        <td className="border-t-2 border-gray-200 px-6 py-4 text-lg text-gray-900">
                                            <img src={ item.img } alt="" />
                                        </td>
                                        <td className="border-t-2 border-gray-200 px-6 py-4">{ item.categoryId }</td>
                                        <td className="border-t-2 border-gray-200 w-10 text-center">
                                            <Button type="danger" icon={ <AiTwotoneDelete /> } onclick={ () => dispatch( remove( item._id! ) ) } />
                                        </td>
                                        <Link to={ "add" }><td className="border-t-2 border-gray-200 w-10 text-center">
                                            <Button type="primary" icon={ <AiFillPlusSquare /> } />
                                        </td></Link>
                                        <Link to={ "edit/" + item._id }>   <td className="border-t-2 border-gray-200 w-10 text-center">
                                            <Button type="danger" icon={ <AiOutlineInteraction /> } />
                                        </td></Link>
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>
                    </div>
                    <div className="flex pl-4 mt-4 lg:w-3/4 w-full mx-auto justify-center"> {/* Updated 'justify-center' class here */ }
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                            Xoá hết
                        </button>
                    </div>
                </div>
            </section>

            {/* <Navbar /> */ }

        </div>
    )
}

export default Dasbroad