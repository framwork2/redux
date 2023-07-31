import axios from "axios";
import { Login, Signup } from "../interface/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Signin = createAsyncThunk(
    "auth/signin",
    async ( product: Login ) =>
    {
        try
        {

            const { data } = await axios.post( `http://localhost:8080/api/signin`, product



            );

            return data


        } catch ( error: any )
        {
        } finally
        {
        }
    }
)
export const Dk = createAsyncThunk(
    "auth/signin",
    async ( product: Signup ) =>
    {
        try
        {

            const { data } = await axios.post( `http://localhost:8080/api/signup`, product



            );

            return data


        } catch ( error: any )
        {
        } finally
        {
        }
    }
)