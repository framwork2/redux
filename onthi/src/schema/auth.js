import joi from "joi"
export const authSchema = joi.object( {
    name: joi.string().required().messages( {
        "string.empty": "truong du lieu bat buoc",
        "any.required": "truong du lieu name k dc de trong"
    } ),
    email: joi.string().email().required().messages( {
        "string.empty": "truong du lieu bat buoc",
        "any.required": "truong du lieu name k dc de trong",
        "string.email": "email k dung dinh dang"

    } ),
    password: joi.string().min( 6 ).required().messages( {
        "string.empty": "truong du lieu bat buoc",
        "any.required": "truong du lieu name k dc de trong",
        "string.min": "pass khong {#limit} dung"

    } ),
    confirmPassword: joi.string().valid( joi.ref( "password" ) ).required().messages( {
        "string.empty": "truong du lieu bat buoc",
        "any.required": "truong du lieu name k dc de trong",
        "any.only": "passs word k khop"
    } )
} )
export const singinSchema = joi.object( {

    email: joi.string().email().required().messages( {
        "string.empty": "truong du lieu bat buoc",
        "any.required": "truong du lieu name k dc de trong",
        "string.email": "email k dung dinh dang"

    } ),
    password: joi.string().min( 6 ).required().messages( {
        "string.empty": "truong du lieu bat buoc",
        "any.required": "truong du lieu name k dc de trong",
        "string.min": "pass khong {#limit} dung"

    } ),

} )