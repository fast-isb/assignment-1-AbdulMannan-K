import axios from "axios";

export let patients = []

export const medicineOptions=[
    {
        id:1,
        title:'Panadol',
    },
    {
        id:2,
        title:'Despirin'
    },
    {
        id:3,
        title: 'sadsa'
    }
]

export async function addPrescription(patient, prescription) {
    prescription.medicine = medicineOptions[prescription.medicineId - 1].title;
    // patient.prescriptions.push(prescription);
    await axios.post('http://localhost:3001/patients/'+patient._id+'/add',{
        prescription
    }).then(async (res) => {
        let newPrescription = await res.data;
        console.log('res data '+newPrescription.quantity)
        await getMedicine(newPrescription);
        patient.prescriptions.push(newPrescription);
    })
    console.log('check 1 '+patient.prescriptions)
}

export async function getMedicine(prescription){
    let medicine;
    medicine=await (await axios.get('http://localhost:3001/patients/medicines/' + prescription.medicine)).data
    prescription.medicine=medicine;
    console.log('medicine : '+medicine)
}
export async function getPrescriptions(patient){
    for(let i=0 ;i < patient.prescriptions.length ; i++){
        let pres;
        pres=await (await axios.get('http://localhost:3001/patients/' + patient.prescriptions[i]._id)).data
        console.log('pres'+pres);
        await getMedicine(pres);
        patient.prescriptions[i]=(pres);
    }
    console.log('prescriptions: ' +patient.prescriptions);
}

export async function removePrescription(patient, prescription) {
    patient.prescriptions = patient.prescriptions.filter(e => e !== prescription)
    await axios.post('http://localhost:3001/patients/' + patient._id + '/remove', {
        prescription
    })
}

// export async function getAllPatients(){
//     let patients = await axios.get('http://localhost:3001/patients')
//     console.log('patients in frontend : '+(patients.data))
//     return patients;
// }
export async function updatePatients(){
    let patient = await (await axios.get('http://localhost:3001/patients')).data;
    // patients.push(patient[0]);
    patients=patient;
    console.log('frontend : '+patient.map((p)=>p.name));

    await getPrescriptions(patients[0]);

    return patients;
}
export function getUpdatedPatient(patient){
    return patients.find(element=>element===patient);
}