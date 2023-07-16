import Auth from "../model/auth"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { authSchema, singinSchema } from "../schema/auth"
export const singup = async ( req, res ) =>
{
    try
    {
        const { error } = authSchema.validate( req.body, { abortEarly: false } )
        if ( error )
        {
            return res.status.json( {
                message: error.details.map( err => err.message )
            } )
        }

        const userExit = await Auth.findOne( { email: req.body.email } )
        if ( userExit )
        {
            return res.status( 400 ).json( {
                message: "email da ton tai"
            } )
        }
        const hashPassword = await bcrypt.hash( req.body.password, 10 )
        const user = await Auth.create( {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        } )

        return res.json( {
            user
        } )

    } catch ( error )
    {

        return res.status( 400 ).json( {
            message: error
        } )
    }
}
// export const getAll = async ( req, res ) =>
// {
//     try
//     {
//         // return res.status( 200 ).json( "abc" )
//         // const auth = await Auth.find()
//         // console.log( auth );
//         // return res.json(
//         //     auth
//         // )
//         const data = await Auth.find()
//         return res.status( 200 ).json( data )

//     } catch ( error )
//     {
//         return res.status( 400 ).json( {
//             message: error
//         } )
//     }
// }

export const getAllUser = async ( req, res ) =>
{
    try
    {
        const data = await Auth.find();
        return res.status( 200 ).json( data )
    } catch ( error )
    {
        return res.status( 400 ).json( error )
    }
}
export const get = async ( req, res ) =>
{
    try
    {

        const productss = await Auth.findById( req.params.id )
        console.log( productss );
        return res.json(
            productss
        )

    } catch ( error )
    {
        return res.status( 400 ).json( {
            message: error
        } )
    }
}
export const singin = async ( req, res ) =>
{
    try
    {
        const { error } = singinSchema.validate( req.body, { abortEarly: false } )
        if ( error )
        {
            return res.status( 400 ).json( {
                message: error.details.map( err => err.message )
            } )
        }
        const user = await Auth.findOne( { email: req.body.email } )
        if ( !user )
        {
            return res.status( 400 ).json( {
                message: "email khong toon tai"
            } )
        }
        const isMatch = await bcrypt.compare( req.body.password, user.password )
        if ( !isMatch )
        {
            return res.status( 400 ).json( {
                message: "mat khau khong dung"

            } )
        }

        const token = jwt.sign( { id: user._id }, "123456", { expiresIn: "1d" } )


        return res.status( 200 ).json( {
            accessToken: token,
            user
        } )

    } catch ( error )
    {

        return res.status( 400 ).json( {
            message: error
        } )
    }
}