import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        methods: ["GET", "POST", "DELETE", "PUT","PATCH"],
        allowedHeaders: [
          "Content-Type",
          "Authorization",
          "Cache-Control",
          "Expires",
          "Pragma",
        ],
        credentials: true,
    })
)

app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({limit:"20kb", extended:true}))
app.use(express.static("public"))


//Global middleware routes


export {app}