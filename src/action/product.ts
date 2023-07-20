import axios from "axios";

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