import mongoose from 'mongoose'

const schema = mongoose.Schema;

const patientSchema = new schema(
    {
        id:{
            type:Number,
        },
        name: {
            type:String,
            required:true,
        },
        gender: {
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        bloodType: {
            type:String,
            required:true,
        },
        heartRate:{
            type:Number,
            required:true,
        },
        temperature:{
            type:Number,
            required:true,
        },
        glucose:{
            type:Number,
            required:true,
        },
        allergies:{
            type:[String],
        },
        diseases:{
            type:[String],
        },
        tests:{
            type:[{
                name:{
                    type:String,
                    required:true
                },
                date:{
                    type:Date,
                    required:true,
                }
            }]
        },
        prescriptions:[
            {
                id:{
                    type:schema.Types.ObjectId,
                    ref:'prescriptions',
                },
            },
        ],
        height:{
            type:Number,
            required:true,
        },
        weight:{
            type:Number,
            required:true,
        },
        image:{
            type:String,
            required:true
        }
    }
);

export const patient = new mongoose.model('patients',patientSchema);
