import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SideBar from "../Components/SideBar";
import PatientInfo from "../Components/PatientInfo";
const CheckPatient = props => {
    const {patients} = props;
    return (
        <div className="flex">
            <SideBar list={patients} />
            <PatientInfo patient={patients[0]}/>
        </div>
    );
};
export default CheckPatient;