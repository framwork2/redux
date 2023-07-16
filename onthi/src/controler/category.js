import category from "../model/category"
import { categorySchema } from "../schema/category"

export const create = async ( req, res ) =>
{
    try
    {
        const { error } = categorySchema.validate( req.body, { abortEarly: false } )
        if ( error )
        {
            return res.status.json( {
                message: error.details.map( err => err.message )
            } )
        }
        const categorys = await category.create( req.body )
        return res.json(
            categorys
        )

    } catch ( error )
    {
        console.log( error );
    }
}
export const getAll = async ( req, res ) =>
{
    try
    {

        const categorys = await category.find().populate( 'products' )
        return res.json(
            categorys
        )

    } catch ( error )
    {
        console.log( error );
    }
}
export const get = async ( req, res ) =>
{
    try
    {
        const categorys = await category.findById( req.params.id )
        return res.json(
            categorys
        )

    } catch ( error )
    {
        console.log( error );
    }
}
export const update = async ( req, res ) =>
{
    try
    {

        const categorys = await category.findByIdAndUpdate( req.params.id, req.body, { new: true } )
        return res.json(
            categorys
        )

    } catch ( error )
    {
        return res.status( 400 ).json( {
            message: error
        } )
    }
}
export const remove = async ( req, res ) =>
{
    try
    {

        const categorys = await category.findByIdAndDelete( req.params.id )
        return res.json( {
            message: "xoa thanh cong",
            categorys
        } )

    } catch ( error )
    {
        console.log( error );
    }
}