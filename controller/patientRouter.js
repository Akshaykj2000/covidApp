const express =require("express")
const router =express.Router()
const PatientSchema = require("../modules/convidSchema")
const { default: mongoose } = require("mongoose")


router.post("/addPatient",async(req,res)=>{
        let data =req.body
        let patient = new PatientSchema(data)
        let result = await patient.save()
        res.json({status:"success"})

})

router.get("/view",async(req,res) =>{
    let data =await PatientSchema.find()

    res.json(data)
})

module.exports=router