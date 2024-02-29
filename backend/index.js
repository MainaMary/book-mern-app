import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from "dotenv";
import morgan from 'morgan';
import bookRouter from './routes/bookRouter.js';
import cors from 'cors'

const app = express()
dotenv.config();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//Body parser middleware
app.use(express.json())

app.use(cors())

app.get('/',(req, res) =>{
    res.status(200).json('Hello World')
})

app.use("/books", bookRouter);

//Not found middleware
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not found" });
});

//Error middleware
app.use((req, res, next) => {
  res.status(500).json({ msg: "Something went wrong" });
})

//connecting to the server
const databaseConnection =  async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connection established')
    }
    catch(error){
        console.log(error.message)
    }

}
databaseConnection()
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})