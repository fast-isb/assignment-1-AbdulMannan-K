import mongoose from 'mongoose'

const schema = mongoose.Schema;

const prescriptionSchema = new schema(
    {
        medicine:{
            type:schema.Types.ObjectId,
            ref:'medicines',
        },
        quantity:{
            type:Number,
            required:true,
        },
        duration:{
            type:Number,
            required:true,
        },
        date: {
            type:Date,
            required:true,
        }
    }
);

export const prescription = new mongoose.model('prescriptions',prescriptionSchema);
