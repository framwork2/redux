import Size from "../model/size"; // Thay thế Size bằng tên model của size nếu có khác
import { sizeSchema } from "../schema/size";

export const create = async ( req, res ) =>
{
    try
    {
        const { error } = sizeSchema.validate( req.body, { abortEarly: false } );
        if ( error )
        {
            return res.status( 400 ).json( {
                message: error.details.map( ( err ) => err.message ),
            } );
        }
        const size = await Size.create( req.body );
        return res.json( size );
    } catch ( error )
    {
        console.log( error );
        return res.status( 500 ).json( {
            message: "Something went wrong",
        } );
    }
};

export const getAll = async ( req, res ) =>
{
    try
    {
        const sizes = await Size.find();
        return res.json( sizes );
    } catch ( error )
    {
        console.log( error );
        return res.status( 500 ).json( {
            message: "Something went wrong",
        } );
    }
};

export const get = async ( req, res ) =>
{
    try
    {
        const size = await Size.findById( req.params.id );
        if ( !size )
        {
            return res.status( 404 ).json( {
                message: "Size not found",
            } );
        }
        return res.json( size );
    } catch ( error )
    {
        console.log( error );
        return res.status( 500 ).json( {
            message: "Something went wrong",
        } );
    }
};

export const update = async ( req, res ) =>
{
    try
    {
        const { error } = sizeSchema.validate( req.body, { abortEarly: false } );
        if ( error )
        {
            return res.status( 400 ).json( {
                message: error.details.map( ( err ) => err.message ),
            } );
        }
        const size = await Size.findByIdAndUpdate( req.params.id, req.body, {
            new: true,
        } );
        if ( !size )
        {
            return res.status( 404 ).json( {
                message: "Size not found",
            } );
        }
        return res.json( size );
    } catch ( error )
    {
        console.log( error );
        return res.status( 500 ).json( {
            message: "Something went wrong",
        } );
    }
};

export const remove = async ( req, res ) =>
{
    try
    {
        const size = await Size.findByIdAndDelete( req.params.id );
        if ( !size )
        {
            return res.status( 404 ).json( {
                message: "Size not found",
            } );
        }
        return res.json( {
            message: "Delete successful",
            size,
        } );
    } catch ( error )
    {
        console.log( error );
        return res.status( 500 ).json( {
            message: "Something went wrong",
        } );
    }
};

export const chooseSize = async ( req, res ) =>
{
    try
    {
        const { productId, sizeId } = req.body;
        const size = await Size.findById( sizeId );
        if ( !size )
        {
            return res.status( 404 ).json( {
                message: "Size not found",
            } );
        }

        const product = await Product.findById( productId );
        if ( !product )
        {
            return res.status( 404 ).json( {
                message: "Product not found",
            } );
        }

        // Lưu sizeId vào product
        product.sizeId = sizeId;
        await product.save();

        return res.json( {
            message: "Choose size successful",
            product,
        } );
    } catch ( error )
    {
        console.log( error );
        return res.status( 500 ).json( {
            message: "Something went wrong",
        } );
    }
};