import React, {useEffect, useState} from 'react';
import SideBar from "../Components/SideBar";
import PatientInfo from "../Components/PatientInfo";
import {updatePatients} from "../Services/Patient";
const CheckPatient = props => {
    const [patients,setPatients]=useState(props.patients);
    const [patient,setPatient] = useState();
    useEffect(()=>{
        const update=async () => {
            setPatients(await updatePatients());
        }
        update();
    },[])
    const onClick = (e)=>{
        let name = e.target.name;
        let patient =  patients.find(element=>element.name===name);
        setPatient(patient);
    }

    if(patient!=null)
        return (
            <div className="flex">
                <SideBar list={patients} onClick={onClick}/>
                <PatientInfo patient={patient}/>
            </div>
        );
    else
        return (
            <div className="flex">
                <SideBar list={patients} onClick={onClick}/>
            </div>
        )

};
export default CheckPatient;
