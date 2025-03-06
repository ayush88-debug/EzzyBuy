import { app } from "./app.js";
import DBconnect from "./src/db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})




DBconnect()
    .then(()=>{
        app.listen(process.env.PORT || 5000 , ()=>{
            console.log(`app listening on port http://localhost:${process.env.PORT}`)
        })
    })
    .catch((error)=>{
        console.log("MONGO db connection failed !!! ", err);
    })