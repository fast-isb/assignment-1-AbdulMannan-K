import React, {useEffect, useState} from 'react';
import image from '../img.jpg';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import {Button} from "@mui/material";
import Popup from "./Popup";
import PrescriptionForm from "../Pages/PrescriptionForm";
import * as service from "../Services/Patient"
import UseTable from "./useTable";
import ActionButton from "./controls/ActionButton";
import DeleteIcon from "@mui/icons-material/Delete";

const header = [
    'Medicine',
    'Duration',
    'Quantity',
    'Date',
    'Actions'
]
function PatientInfo(props) {

    const {patient} = props;
    const [open,setOpen] = useState(false);
    const [prescriptions,setPrescriptions] = useState([]);
    const openPrescription = ()=>{
        setOpen(true);
    }
    const addPrescription = async (prescription) => {
        await service.addPrescription(patient, prescription).then(r => console.log("success")).catch(err => console.log("error : " + err));
        console.log("check " + patient.prescriptions);
        setPrescriptions(patient.prescriptions);
        setOpen(false);
    }

    const removePrescription = (prescription)=>{
        service.removePrescription(patient,prescription).then(r => console.log("success")).catch(err=>console.log("error : "+err));
        setPrescriptions(patient.prescriptions);
    }

    useEffect(()=>{
        setPrescriptions(patient.prescriptions);
    },[patient])

    return (
        <div className="container grid grid-cols-3 ">
            <div className="container "  >
                <div className="container mx-auto px-4 py-2">
                    <div
                        className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-10 py-6">
                            <img className="w-40 h-40 rounded-full shadow-lg"
                                src={'http://localhost:3001/'+patient.image}
                                alt="personal image"/>
                            <h3 className="mb-1 text-xl font-medium font-bold text-gray-900 dark:text-white inline">{patient.name}</h3>
                            <h4 className="text-sm text-gray-500 dark:text-gray-400 inline">Age : {patient.age}</h4>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-2">
                    <div
                        className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col px-5 pb-10 py-5">
                            <h2 className="mb-1 h-20 font-medium font-bold text-gray-900 dark:text-white">Information : </h2>
                            <span className="py-2">
                        <h3 className="font-bold inline" >Gender:  </h3>
                        <h4 className=" text-gray-500 dark:text-gray-400 inline">{patient.gender}</h4>
                        </span>
                            <span className="py-2">
                        <h3 className="font-bold inline" >Blood Type:  </h3>
                        <h4 className=" text-gray-500 dark:text-gray-400 inline">{patient.bloodType}</h4>
                        </span>
                            <span className="py-2">
                        <h3 className="font-bold inline" >Diseases:  </h3>
                                {patient.diseases.map((disease)=>
                                    <h4 className=" text-gray-500 dark:text-gray-400 inline">{disease},</h4>
                                )}
                        </span>
                            <span className="py-2">
                        <h3 className="font-bold inline" >Allergies:  </h3>
                                {patient.allergies.map((allergy)=>
                                    <h4 className=" text-gray-500 dark:text-gray-400 inline">{allergy},</h4>
                                )}
                        </span>
                            <span className="py-2">
                        <h3 className="font-bold inline" >Height:  </h3>
                        <h4 className=" text-gray-500 dark:text-gray-400 inline">{patient.height}</h4>
                        </span>
                            <span className="py-2">
                        <h3 className="font-bold inline" >Weight:  </h3>
                        <h4 className=" text-gray-500 dark:text-gray-400 inline">{patient.weight}</h4>
                        </span>
                            <span className="py-2">
                        <h3 className="font-bold inline" >Patient ID: </h3>
                        <h4 className=" text-gray-500 dark:text-gray-400 inline">{patient._id}</h4>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container col-span-2">
                <div className="flex" >
                    <div className="container mx-auto px-4 py-2">
                        <div
                            className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                            <div className="flex row items-center py-2 px-3">
                                <img src="https://img.icons8.com/fluency/96/1A1A1A/heart-with-pulse.png"/>
                                <div className="m-5">
                                    <h4 className="mb-1 text-xl text-gray-900 dark:text-white">Heart Rate</h4>
                                    <h2 className="text-sm text-gray-900 dark:text-white"><h2 className="text-gray-900 dark:text-white" style={{fontSize:"30px",display:"inline"}}>{patient.heartRate}</h2> bpm</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-2">
                        <div
                            className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex row items-center py-2 px-3">
                                <img src="https://img.icons8.com/color/96/000000/hot.png"/>
                                <div className="m-5">
                                    <h4 className="mb-1 text-xl text-gray-900 dark:text-white"> Temperature</h4>
                                    <h2 className="text-sm text-gray-900 dark:text-white"><h2 className="text-gray-900 dark:text-white" style={{fontSize:"30px",display:"inline"}}>{patient.temperature}</h2> C</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-2">
                        <div
                            className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex row items-center py-2 px-3">
                                <img src="https://img.icons8.com/fluency-systems-regular/96/000000/sugar-cubes.png"/>
                                <div className="m-5">
                                    <h4 className="mb-1 text-xl text-gray-900 dark:text-white">Glucose</h4>
                                    <h2 className="text-sm text-gray-900 dark:text-white"><h2 className="text-gray-900 dark:text-white" style={{fontSize:"30px",display:"inline"}}>{patient.glucose}</h2> mg/dl</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container mx-auto px-4 py-2">
                        <div className="w-full  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col px-5 pb-10 py-5">
                                <h2 className="mb-5 font-medium font-bold text-gray-900 dark:text-white">Test Reports </h2>
                                <div className="grid grid-cols-3">
                                    {
                                        patient.tests.map((test)=>{
                                            return <a className="flex rounded-lg p-3 hover:bg-gray-100" style={{textDecoration:"none"}} href="" download>
                                                <ContentPasteIcon className="m-1" fontSize={"large"}/>
                                                <div><h4 className="text-gray-900 dark:text-white m-0 inline" >{test.name}</h4>
                                                <h5 className=" text-gray-500 dark:text-gray-400 m-0">{test.date}</h5></div>
                                            </a>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container mx-auto px-4 py-2">
                        <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col px-5 pb-10 py-5">
                                <h2 className="mb-5 font-medium font-bold text-gray-900 dark:text-white">Prescription </h2>
                                <Button className="p-3" variant="outlined" onClick={openPrescription}>Add a prescription</Button>
                                <div className=" h-60  overflow-y-scroll">
                                    {/*    // return <div>{prescription.medicine}</div>*/}
                                    <UseTable header={header} >
                                        {prescriptions.map((prescription)=> {
                                            return  <tr key={prescription.medicine} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {prescription.medicine.name}
                                                </th>
                                                <td className="py-4 px-6">
                                                    {prescription.duration}
                                                </td>
                                                <td className="py-4 px-6">
                                                    {prescription.quantity}
                                                </td>
                                                <td className="py-4 px-6">
                                                    {prescription.date}
                                                </td>
                                                <td className="py-4 px-6 text-right">
                                                    <ActionButton
                                                        color="red"
                                                        onClick={()=> {removePrescription(prescription)}}
                                                    >
                                                        <DeleteIcon fontSize="small"/>
                                                    </ActionButton>
                                                </td>
                                            </tr>
                                        })}
                                    </UseTable>
                                    {/*})}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Popup title="Prescription Form" openPopup={open} setOpenPopup={setOpen}>
                    <PrescriptionForm onSubmit={addPrescription}/>
                </Popup>
            </div>
        </div>

    );
}

export default PatientInfo;

