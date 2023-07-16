import category from "../model/category"
import product from "../model/product"
import { categorySchema } from "../schema/category"
import { productSchema } from "../schema/product"

export const create = async ( req, res ) =>
{
    try
    {
        const { error } = productSchema.validate( req.body, { abortEarly: false } )
        if ( error )
        {
            return res.status( 400 ).json( {
                message: error.details.map( err => err.message )
            } )
        }

        const productss = await product.create( req.body )
        await category.findByIdAndUpdate( productss.categoryId, {
            $addToSet: {
                products: productss._id
            }
        } )
        return res.json( {
            productss
        } )

    } catch ( error )
    {

        return res.status( 400 ).json( {
            message: error
        } )
    }
}
export const getAll = async ( req, res ) =>
{
    try
    {
        const limit = parseInt( req.query.limit ) || 20;
        const page = parseInt( req.query.page ) || 0
        const skip = limit * page
        const productss = await product.find().sort( { price: -1 } ).skip( skip ).limit( limit )
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
export const get = async ( req, res ) =>
{
    try
    {
        const productss = await product.findById( req.params.id )
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
export const update = async ( req, res ) =>
{
    try
    {

        const productss = await product.findByIdAndUpdate( req.params.id, req.body, { new: true } )
        return res.json( {
            productss
        } )

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

        const productss = await product.findByIdAndDelete( req.params.id )
        return res.json( {
            message: "xoa thanh cong",
            productss
        } )

    } catch ( error )
    {
        return res.status( 400 ).json( {
            message: error
        } )
    }
}