import React from 'react';
import image from '../img.jpg';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import {Button} from "@mui/material";


function PatientInfo(props) {

    const {patient} = props;

    return (
        <div className="container grid grid-cols-3 ">
            <div className="container "  >
                <div className="container mx-auto px-4 py-2">
                    <div
                        className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-10 py-6">
                            <img className="w-40 h-40 rounded-full shadow-lg"
                                 src={image} alt="personal image"/>
                            <h3 className="mb-1 text-xl font-medium font-bold text-gray-900 dark:text-white inline">{patient.name}</h3>
                            <h4 className="text-sm text-gray-500 dark:text-gray-400 inline">Age : {patient.age}</h4>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-2">
                    <div
                        className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col px-5 pb-10 py-5">
                            <h2 className="mb-1 font-medium font-bold text-gray-900 dark:text-white">Information : </h2>
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
                        <h4 className=" text-gray-500 dark:text-gray-400 inline">{patient.id}</h4>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container col-span-2">
                <div className="flex" >
                    <div className="container mx-auto px-4 py-2">
                        <div
                            className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center py-6">
                                <img src="https://img.icons8.com/fluency/96/1A1A1A/heart-with-pulse.png"/>
                                <h4 className="mb-1 text-xl text-gray-900 dark:text-white">Heart Rate</h4>
                                <h2 className="text-sm text-gray-900 dark:text-white"><h2 className="text-gray-900 dark:text-white" style={{fontSize:"30px",display:"inline"}}>{patient.age}</h2> bpm</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-2">
                        <div
                            className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center py-6">
                                <img src="https://img.icons8.com/color/96/000000/hot.png"/>
                                <h4 className="mb-1 text-xl text-gray-900 dark:text-white">Body Temperature</h4>
                                <h2 className="text-sm text-gray-900 dark:text-white"><h2 className="text-gray-900 dark:text-white" style={{fontSize:"30px",display:"inline"}}>{patient.age}</h2> C</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-2">
                        <div
                            className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center py-6">
                                <img src="https://img.icons8.com/fluency-systems-regular/96/000000/sugar-cubes.png"/>
                                <h4 className="mb-1 text-xl text-gray-900 dark:text-white">Glucose</h4>
                                <h2 className="text-sm text-gray-900 dark:text-white"><h2 className="text-gray-900 dark:text-white" style={{fontSize:"30px",display:"inline"}}>{patient.age}</h2> mg/dl</h2>
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
                                <Button className="p-3" variant="outlined">Add a prescription</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PatientInfo;

