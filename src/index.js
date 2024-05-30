
import dotenv from "dotenv";
import connectDB from "./db/dbconnect.js";
import { app } from "./app.js";




dotenv.config({
    path: "./env"
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is runnig at port : ${process.env.PORT}`)
    }); 
})
.catch((err) => {
    console.log("MONGO DB CONNECTION FAILED !!!", err);
})
