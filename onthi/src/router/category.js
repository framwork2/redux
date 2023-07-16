import express from "express"
import { create, get, getAll, remove, update } from "../controler/category"
const router = express.Router()
router.post( "/category", create )
router.get( "/category", getAll )

router.get( "/category/:id", get )

router.put( "/category/:id", update )

router.delete( "/category/:id", remove )

export default router