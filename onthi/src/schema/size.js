import joi from "joi"
export const sizeSchema = joi.object( {
    sizeName: joi.string().required(),
    quantity: joi.number().required()
} )