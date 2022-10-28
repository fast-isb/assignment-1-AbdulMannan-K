import React, {useEffect, useState} from 'react';
import SideBar from "../Components/SideBar";
import PatientInfo from "../Components/PatientInfo";
import {updatePatients} from "../Services/Patient";
const CheckPatient = props => {
    const {patients} = props;
    const [patient,setPatient] = useState(patients[0]);
    useEffect(()=>{
        let p = updatePatients().then(r => r);
        console.log('problem'+p);
    },[])
    const onClick = (e)=>{
        let name = e.target.name;
        let patient =  patients.find(element=>element.name===name);
        setPatient(patient);
    }

    return (
        <div className="flex">
            <SideBar list={patients} onClick={onClick}/>
            <PatientInfo patient={patient}/>
        </div>
    );
};
export default CheckPatient;
