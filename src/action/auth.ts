import axios from "axios";
import { Login, Signup } from "../interface/user";

export const Signin = ( product: Login ) => async ( dispatch: any ) =>
{
    try
    {

        const { data } = await axios.post( `http://localhost:8080/api/signin`, product



        );
        dispatch( { type: "LOGIN", payload: data } )
        console.log( data );


    } catch ( error: any )
    {
    } finally
    {
    }
}
export const Dk = ( product: Signup ) => async ( dispatch: any ) =>
{
    try
    {

        const { data } = await axios.post( `http://localhost:8080/api/signup`, product



        );
        dispatch( { type: "SINGUP", payload: data } )
        console.log( data );


    } catch ( error: any )
    {
    } finally
    {
    }
}