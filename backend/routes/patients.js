import express from 'express'
import {medicine} from "../models/medicene.js";
import {patient} from '../models/patient.js'
import {prescription} from "../models/prescription.js";
import mongoose from "mongoose";

const router = express.Router();
let patients=[]

router.get('/',async (req, res) => {
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@hms.9s3e005.mongodb.net/HMS?retryWrites=true&w=majority");
    patients = await patient.find({});
    patients.forEach((p)=>{
        p.prescriptions=p.prescriptions.map((presc)=>{
            prescription.findById(presc.id);
        })
        p.prescriptions.forEach((presc)=>{
            presc.medicine=medicine.findById(presc.medicine);
        })
    })
    console.log(patients);
    res.send(patients);
})

router.post('/:patientId/add',async (req,res) => {
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@hms.9s3e005.mongodb.net/HMS?retryWrites=true&w=majority");
    //
    // const newPatient = new patient(
    //     {
    //         name: 'abdul',
    //         gender: 'male',
    //         age: 20,
    //         bloodType: 'A+',
    //         heartRate: 30,
    //         temperature:50,
    //         glucose:70,
    //         allergies:['kdasm','askdk'],
    //         diseases:['diabetes','diarhea'],
    //         tests:[{name:'sometest',date:new Date().toLocaleDateString()},{name:'otherTest',date:new Date().toLocaleDateString()}],
    //         prescriptions:[],
    //         height:50,
    //         weight:70,
    //     }
    // );
    // newPatient.save().then(()=>console.log('new patient added')).catch(err=>console.log(err));

    await patient.findById(req.params.patientId)
        .then(async patient => {
            let requiredMedicine = await medicine.findOne({name: req.body.prescription.medicine});
            console.log(requiredMedicine._id);
            let newPrescription = new prescription(
                {
                    medicine:requiredMedicine._id,
                    quantity: req.body.prescription.quantity,
                    duration: req.body.prescription.duration,
                    date: new Date().toLocaleDateString(),
                }
            )
            newPrescription.save().then().catch(err=>console.log(err));
            patient.prescriptions.push(newPrescription._id);

            patient.save()
                .then(() => res.json('Prescription Added'))
                .catch(error => res.status(400).json('Error: ' + error))
        })
        .catch(error=>res.status(400).json('Error: '+error))

})
export default  router;