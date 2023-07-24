import joi from "joi"
export const productSchema = joi.object( {
    name: joi.string().required(),
    price: joi.number().required(),
    img: joi.string().required(),
    chitiet: joi.string().required(),
    size: joi.string().required(),

    categoryId: joi.string().required()
} )