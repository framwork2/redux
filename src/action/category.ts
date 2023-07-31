import axios from "axios";
import { Category } from "../interface/category";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk(
    "fetch/category",
    async () =>
    {
        try
        {
            const { data } = await axios.get( `http://localhost:8080/api/category` )
            return data
        } catch ( error )
        {

        }
    }
)
export const add = createAsyncThunk(
    " add/category",
    async ( product: Category ) =>
    {
        try
        {

            const { data } = await axios.post( `http://localhost:8080/api/category`, product



            );

            console.log( data );
            return data


        } catch ( error: any )
        {
        } finally
        {
        }
    }
)
export const edit = createAsyncThunk(
    "edit/category",
    async ( product: Category ) =>
    {
        try
        {
            const { data } = await axios.put( `http://localhost:8080/api/category/${ product._id }`, product )
            return data
            console.log( data );

        } catch ( error )
        {

        }
    }
)
export const remove = createAsyncThunk(
    "remove/category",
    async ( id: number | string ) =>
    {
        try
        {
            await axios.delete( `http://localhost:8080/api/category/${ id }` )
            return id
            console.log( id );

        } catch ( error )
        {

        }
    }
)
export const get = createAsyncThunk(
    "get/category",
    async ( id: number | string ) =>
    {
        try
        {
            await axios.get( `http://localhost:8080/api/category/${ id }` )
            return id
            console.log( id );

        } catch ( error )
        {

        }
    }
)