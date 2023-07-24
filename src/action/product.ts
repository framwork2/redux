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
export const add = ( product: Iproduct ) => async ( dispatch: any ) =>
{
    try
    {

        const { data } = await axios.post( `http://localhost:8080/api`, product



        );
        dispatch( { type: "add/product", payload: data } )
        console.log( data );


    } catch ( error: any )
    {
    } finally
    {
    }
}
export const edit = ( id: Iproduct ) => async ( dispath: any ) =>
{
    try
    {
        const { data } = await axios.put( `http://localhost:8080/api/${ id._id }`, id )
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
export const get = ( product: Iproduct ) => async ( dispath: any ) =>
{
    try
    {
        await axios.get( `http://localhost:8080/api/${ product._id }` )
        dispath( { type: "get/product", payload: product } )
        console.log( product );

    } catch ( error )
    {

    }
}