import { useEffect } from "react"
import { Button } from "../../showInfor"
import { useSelector, useDispatch } from 'react-redux';
import { Iproduct } from "../../../interface/product"
import { fetch } from "../../../action/product";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { Iproduct } from "../../../interface/product"

export default function Example ()
{
    const dispath: Dispatch<any> = useAppDispatch()
    const { products, error } = useAppSelector( ( state: any ) => state.product )

    useEffect( () =>
    {

        dispath( fetch() )

    }, [ dispath ] )
    const dispath = useDispatch()
    const { products, error } = useSelector( ( state: any ) => state )

    useEffect( () =>
    {
        const fetch = async () =>
        {
            try
            {
                const { data } = await axios.get( `http://localhost:8080/api` )
                dispath( { type: "fetch/product", payload: data } )
                console.log( data );

            } catch ( error )
            {

            }
        }
        fetch()

    }, [] )
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    { products.map( ( product: Iproduct ) => (
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
                            <Button type="primary" >add</Button>
                        </a>
                    ) ) }
                </div>
            </div>
        </div>
    )
}