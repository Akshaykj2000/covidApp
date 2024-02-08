const mongoose = require("mongoose")

const PatientSchema =new mongoose.Schema(
    {
        "Patientname":String,
        "MobileNo":String,
        "Address":String,
        "Symtoms":String,
        "Status":String,
    }
)

module.exports =mongoose.model("Covid",PatientSchema)