const express =require("express")
const cors =require("cors")
const mongoose =require("mongoose")
const patientRoute=require("./controller/patientRouter")

const app =express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://akshaykj:akshaykj@cluster0.3vob5wn.mongodb.net/covidDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/covid/",patientRoute)

app.listen("3000",()=>
console.log("Server Running"))