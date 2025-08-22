import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnnectDB from "./src/Configs/db.js";
import cookieParser from "cookie-parser";
import authRouter  from "./src/Routers/authRouter.js"


dotenv.config()
const app = express()
app.use(cors({origin : "http://localhost:5173" , credentials: true }))

app.use(express.json())
app.use(cookieParser())

app.use("/auth" , authRouter )


const Port = process.env.Port || 3300 ;


app.listen( Port , async  () => {
    console.log(`Hi Connnected on ${Port}`);
    await ConnnectDB();
})

 