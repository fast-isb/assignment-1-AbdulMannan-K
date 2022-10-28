import mongoose from 'mongoose'

const schema = mongoose.Schema;

const medicineSchema = new schema(
    {
        name: {
            type: String,
            required: true,
        },
    }
);

export const medicine = new mongoose.model('medicines',medicineSchema);
