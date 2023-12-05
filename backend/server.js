const express = require("express")
const mongoose = require("mongoose")
const app = express();
const mainRoute = require("./routes/index.js")
const logger = require("morgan")
const port =5000;
const dotenv = require("dotenv")
dotenv.config();

const connect =async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongodb");
    } catch (error) {
        throw error;
    }
}
//middlewares
app.use(logger("dev"))
app.use(express.json())

app.use("/api",mainRoute)

app.listen(port,()=>{
    connect();
    console.log(`asdf`);
});


