import express from "express"
import categoryRouter from "./router/category"
import productRouter from "./router/products"
import authRouter from "./router/auth"
import sizeRouter from "./router/size"
import mongoose, { connect } from "mongoose";
import cors from "cors"

export const app = express()
app.use( cors() )
app.use( express.json() )
app.use( "/api", categoryRouter )
app.use( "/api", productRouter )
app.use( "/api", authRouter )
app.use( "/api", sizeRouter )

mongoose.connect( "mongodb://127.0.0.1:27017/nhom3" )
export const viteNodeApp = app;