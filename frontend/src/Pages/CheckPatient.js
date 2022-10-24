import React, {useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SideBar from "../Components/SideBar";
import PatientInfo from "../Components/PatientInfo";
const CheckPatient = props => {
    const {patients} = props;
    const [patient,setPatient] = useState(patients[0]);

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