import axios from "axios";
import { Iproduct } from "../interface/product";

export const fetch = () => async ( dispath: any ) =>
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
export const add = ( product: Iproduct ) => async ( dispath: any ) =>
{
    try
    {
        const { data } = await axios.post( `http://localhost:8080/api`, product )
        dispath( { type: "add/product", payload: data } )
        console.log( data );

    } catch ( error )
    {

    }
}
export const edit = ( product: Iproduct ) => async ( dispath: any ) =>
{
    try
    {
        const { data } = await axios.put( `http://localhost:8080/api/${ product._id }`, product )
        dispath( { type: "edit/product", payload: data } )
        console.log( data );

    } catch ( error )
    {

    }
}
export const remove = ( id: number | string ) => async ( dispath: any ) =>
{
    try
    {
        await axios.delete( `http://localhost:8080/api/${ id }` )
        dispath( { type: "delete/product", payload: id } )
        console.log( id );

    } catch ( error )
    {

    }
}