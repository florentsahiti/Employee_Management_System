import express from "express";
import cors from 'cors'
import { adminRouter } from "./Routes/AdminRoute.js";

const app = express()
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}))

app.options('*', cors()); //kjo eshte shtu pershkak se nuk ka funksionu axiosi mir 

app.use(express.json())
app.use('/auth', adminRouter)

app.listen(3000, () =>{
    console.log("Server is running")
})