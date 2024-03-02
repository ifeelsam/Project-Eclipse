import { app } from "./app.js";
import connectDB  from "./db/index.js";
import 'dotenv/config'
import cors from "cors"
import cookieParser from "cookie-parser";



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is serving at http://localhost:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`error: ${err}`)
})