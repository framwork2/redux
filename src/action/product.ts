import axios from "axios";
import { Iproduct } from "../interface/product";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetch = createAsyncThunk(
    "product/fetch",

    async () =>
    {
        try
        {
            const { data } = await axios.get( `http://localhost:8080/api` )

            return data

        } catch ( error )
        {

        }
    }
)
export const add = ( product: Iproduct ) => async ( dispatch: any ) =>
{
    try
    {

        const { data } = await axios.post( `http://localhost:8080/api`, product



        );
        dispatch( { type: "add/product", payload: data } )


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
export const remove = createAsyncThunk(
    "product/delete",

    async ( id: number ) =>
    {
        try
        {
            await axios.delete( `http://localhost:8080/api/${ id }` )
            console.log( id );
            return id


        } catch ( error )
        {

        }
    }
)
export const get = createAsyncThunk(
    "product/get",

    async ( product: Iproduct ) =>
    {
        try
        {
            await axios.get( `http://localhost:8080/api/${ product._id }` )
            console.log( product );
            return product


        } catch ( error )
        {

        }
    }
)