import express from "express"
import { create, get, getAll, remove, update } from "../controler/product"

const router = express.Router()
router.post( "/", create )
router.get( "/", getAll )

router.get( "/:id", get )

router.put( "/:id", update )

router.delete( "/:id", remove )

export default router