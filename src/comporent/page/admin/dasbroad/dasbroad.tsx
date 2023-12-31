import { useEffect } from 'react'
import { Button } from '../../../showInfor'
import { AiTwotoneDelete, AiFillPlusSquare, AiOutlineInteraction } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../../../store/hook';
import { fetch, remove } from '../../../../action/product';
import { Dispatch } from 'redux';
import { Iproduct } from '../../../../interface/product';
import { Link } from 'react-router-dom';
import Nav from '../navAdmin/Nav';




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


            <Nav />
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