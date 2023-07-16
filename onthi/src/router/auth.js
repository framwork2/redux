import express from "express"
import { get, getAllUser, singin, singup } from "../controler/auth"

const router = express.Router()
router.get( "/auth", () => { console.log( "getall" ); }, getAllUser )
router.post( "/signup", singup )
router.post( "/signin", singin )
router.get( "/auth/:id", get )





export default router