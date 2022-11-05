// noinspection JSAnnotator

import express from 'express'
import {medicine} from "../models/medicene.js";
import {patient} from '../models/patient.js'
import {prescription} from "../models/prescription.js";
import mongoose from "mongoose";
import multer from 'multer';
import path from 'path';

const router = express.Router();
let patients=[]

router.get('/',async (req, res) => {
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@hms.9s3e005.mongodb.net/HMS?retryWrites=true&w=majority");
    patients = await patient.find({});
    res.send(patients);
})

router.get('/:prescriptionId',async (req,res)=>{
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@hms.9s3e005.mongodb.net/HMS?retryWrites=true&w=majority");
    res.send(await prescription.findById(req.params.prescriptionId));
})

router.get('/medicines/:medicineId',async (req,res)=>{
    console.log('here');
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@hms.9s3e005.mongodb.net/HMS?retryWrites=true&w=majority");
    res.send(await medicine.findById(req.params.medicineId));
})

router.post('/:patientId/add',async (req,res) => {
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@hms.9s3e005.mongodb.net/HMS?retryWrites=true&w=majority");
    // const newPatient = new patient(
    //     {
    //         name: 'mannan',
    //         gender: 'male',
    //         age: 20,
    //         bloodType: 'A+',
    //         heartRate: 30,
    //         temperature:50,
    //         glucose:70,
    //         allergies:['kdasm','askdk'],
    //         diseases:['diabetes','diarhea'],
    //         tests:[{name:'testing',date:new Date().toLocaleDateString()},{name:'otherTest',date:new Date().toLocaleDateString()},{name:'secondTest',date:new Date().toLocaleDateString()}],
    //         prescriptions:[],
    //         height:50,
    //         weight:70,
    //     }
    // );
    // newPatient.save().then(()=>console.log('new patient added')).catch(err=>console.log(err));
    //checking commentcd
    let addedPrescription;
    await patient.findById(req.params.patientId)
        .then(async patient => {
            let requiredMedicine = await medicine.findOne({name: req.body.prescription.medicine});
            console.log(requiredMedicine._id);
            let newPrescription = new prescription(
                {
                    medicine:requiredMedicine._id,
                    quantity: req.body.prescription.quantity,
                    duration: req.body.prescription.duration,
                    date:  new Date().toISOString().slice(0, 10),
                }
            )
            newPrescription.save().then().catch(err=>console.log(err));
            patient.prescriptions.push(newPrescription._id);
            addedPrescription=newPrescription;
            patient.save()
                .catch(error => res.status(400).json('Error: ' + error))
        })
        .catch(error=>res.status(400).json('Error: '+error))
    console.log("test "+addedPrescription)
    res.data=addedPrescription
    res.send(addedPrescription);
})


router.post('/:patientId/remove',async (req,res) => {
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@hms.9s3e005.mongodb.net/HMS?retryWrites=true&w=majority");
    console.log('at remove');
    await patient.findById(req.params.patientId)
        .then(async patient => {

            // await prescription.findById(req.body.prescription._id);
            // patient.prescriptions = patient.prescriptions.filter(e => e._id !== prescription._id)
            console.log(req.body.prescription._id);
            patient.prescriptions.pull({ _id: req.body.prescription._id }) // removed


            patient.save()
                .then(() => res.json('Prescription Removed'))
                .catch(error => res.status(400).json('Error: ' + error))
            await prescription.deleteOne({_id:req.body.prescription._id});

        })
        .catch(error=>res.status(400).json('Error: '+error))

})

const __dirname = path.resolve();

const storage = multer.diskStorage(
    {
        destination: function(req,file,cb){
            cb(null,path.join(__dirname,'/uploads/'))
        },
        filename:function(req,file,cb){
            cb(null,file.originalname);
        }
    }
)
const upload = multer({
    storage: storage,
});


router.post('/add/newPatient',upload.single('image'),async(req,res)=>{
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@hms.9s3e005.mongodb.net/HMS?retryWrites=true&w=majority");
    console.log(req);
    const newPatient = await new patient(
        {
            name: 'adam',
            gender: 'male',
            age: 20,
            bloodType: 'A+',
            heartRate: 30,
            temperature:50,
            glucose:70,
            allergies:['kdasm','askdk'],
            diseases:['diabetes','diarhea'],
            tests:[{name:'testing',date:new Date().toLocaleDateString()},{name:'otherTest',date:new Date().toLocaleDateString()},{name:'secondTest',date:new Date().toLocaleDateString()}],
            prescriptions:[],
            height:50,
            weight:70,
            image:req.file.path,
        }
    );
    await newPatient.save().then(()=>console.log('new patient added')).catch(err=>console.log(err));
    res.send('success');
})

router.get('/add/newPatient',(req,res)=>{
    console.log('here')
    res.send("yep")
})

export default  router;