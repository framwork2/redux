import axios from "axios";
import { Category } from "../interface/category";

export const fetchCategory = () => async ( dispatch: any ) =>
{
    try
    {
        const { data } = await axios.get( `http://localhost:8080/api/category` )
        dispatch( { type: "fetch/category", payload: data } )

    } catch ( error )
    {

    }
}
export const add = ( product: Category ) => async ( dispatch: any ) =>
{
    try
    {

        const { data } = await axios.post( `http://localhost:8080/api/category`, product



        );
        dispatch( { type: "add/category", payload: data } )
        console.log( data );


    } catch ( error: any )
    {
    } finally
    {
    }
}
export const edit = ( product: Category ) => async ( dispath: any ) =>
{
    try
    {
        const { data } = await axios.put( `http://localhost:8080/api/category/${ product._id }`, product )
        dispath( { type: "edit/category", payload: data } )
        console.log( data );

    } catch ( error )
    {

    }
}
export const remove = ( id: number | string ) => async ( dispath: any ) =>
{
    try
    {
        await axios.delete( `http://localhost:8080/api/category/${ id }` )
        dispath( { type: "delete/category", payload: id } )
        console.log( id );

    } catch ( error )
    {

    }
}
export const get = ( product: Category ) => async ( dispath: any ) =>
{
    try
    {
        await axios.get( `http://localhost:8080/api/category/${ product._id }` )

    } catch ( error )
    {

    }
}
export const selectCategory = ( category: Category ) => ( {
    type: "SELECT_CATEGORY",
    payload: category,
} );