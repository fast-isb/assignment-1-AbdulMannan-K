import {React , useEffect} from 'react';
import Input from "../Components/controls/Input";
import {Form, useForm} from "../Components/useForm";
import Select from "../Components/controls/Select";
import Button from "../Components/controls/Button";
import * as service from "../Services/Patient";
import {Grid} from "@mui/material";

const initialValues = {
    id:0,
    medicine:'',
    medicineId:'',
    quantity:0,
    duration:0,
    date:Date.now(),
}

function PrescriptionForm(props) {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('medicineId' in fieldValues)
            temp.medicineId = fieldValues.medicineId.length !== 0 ? "" : "This field is required."
        if ('quantity' in fieldValues)
            temp.quantity = fieldValues.quantity ? "" : "This field is required."
        if ('duration' in fieldValues)
            temp.duration = fieldValues.duration ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {values,setValues,errors,setErrors,handleInputChange} = useForm(initialValues,true,validate);

    function handleSubmit(e){
        e.preventDefault();
        if(validate()){
            console.log(values);
            props.onSubmit(values);
            // service.addItem(values);
        }
    }

    return (
        <Form onSubmit={handleSubmit} style={{display:'grid', gap:30, margin:'30px'}}>
                    <Select
                        name="medicineId"
                        label="Medicine"
                        options={service.medicineOptions}
                        value={values.medicineId}
                        onChange={handleInputChange}
                        error={errors.medicineId}/>
                <Input
                    name="quantity"
                    label="Quantity"
                    type="Number"
                    value={values.quantity}
                    onChange={handleInputChange}
                    error={errors.quantity}/>
                <Input
                    name="duration"
                    label="Duration"
                    type="Number"
                    value={values.duration}
                    onChange={handleInputChange}
                    error={errors.duration}/>
                <Button
                    type="submit"
                    text="Submit"
                    styles={{margin:"5px"}}
                />
        </Form>
    );
}

export default PrescriptionForm;