import { application } from "express";
import connectDB  from "./db/index.js";
import 'dotenv/config'



connectDB()
.then(()=>{
    application.listen(process.env.PORT || 8000, () => {
        console.log(`server is serving at http://localhost:${process.env.PORT}`)
    })
})