import axios from "axios";

export let patients = [

    {
        id:'635aed461ececd1967a4e814',
        name:'abdul',
        gender:'male',
        age:20,
        bloodType:'A+',
        heartRate:30,
        temperature:90,
        glucose:30,
        allergies:['Milk','Penicilin',],
        diseases:['Diabetes','Heart',],
        tests:[
            {
                name:'CT Scan -Full Body',
                date:'12th Feburary 2020'
            },
            {
                name:'Creatine Kinase T',
                date:'12th March 2020'
            },
            {
                name:'Eye',
                date:'14th April 2021'
            }
        ],
        prescriptions:[

            {
                id:1,
                medicine:'Penadol',
                medicineId:'1',
                quantity:23,
                duration:234,
                date:new Date().toLocaleDateString()
                ,
            },
            {
                id:2,
                medicine:'aklsf',
                medicineId:'2',
                quantity:23,
                duration:234,
                date:Date.now(),
            }
        ],
        height:1.78,
        weight:65,
    },
    {
        id:12312432,
        name:'mannan',
        gender:'male',
        age:20,
        bloodType:'A+',
        heartRate:30,
        temperature:90,
        glucose:30,
        allergies:['Milk','Penicilin',],
        diseases:['Diabetes','Heart',],
        tests:[
            {
                name:'CT Scan -Full Body',
                date:'12th Feburary 2020'
            },
            {
                name:'Creatine Kinase T',
                date:'12th March 2020'
            },
            {
                name:'Hello World',
                date:'14th April 2021'
            }
        ],
        prescriptions:[

            {
                id:1,
                medicine:'Something',
                medicineId:'1',
                quantity:23,
                duration:234,
                date:Date.now(),
            },
            {
                id:2,
                medicine:'nothingS',
                medicineId:'2',
                quantity:23,
                duration:234,
                date:Date.now(),
            }
        ],
        height:1.78,
        weight:65,
    },
    {
        id:1231243221312,
        name:'kklas',
        gender:'male',
        age:20,
        bloodType:'A+',
        heartRate:30,
        temperature:90,
        glucose:30,
        allergies:['Milk','Penicilin',],
        diseases:['Diabetes','Heart',],
        tests:[
            {
                name:'CT Scan -Full Body',
                date:'12th Feburary 2020'
            },
            {
                name:'Creatine Kinase T',
                date:'12th March 2020'
            },
            {
                name:'Hello World',
                date:'14th April 2021'
            }
        ],
        prescriptions:[

            {
                id:1,
                medicine:'Something',
                medicineId:'1',
                quantity:23,
                duration:234,
                date:Date.now(),
            },
            {
                id:2,
                medicine:'nothingS',
                medicineId:'2',
                quantity:23,
                duration:234,
                date:Date.now(),
            }
        ],
        height:1.78,
        weight:65,
    }

]

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
    patient.prescriptions.push(prescription);
    await axios.post('http://localhost:3001/patients/'+patient.id+'/add',{
        prescription
    }).then(()=>console.log())
}

export async function removePrescription(patient, prescription) {
    await axios.post('http://localhost:3001/patients/' + patient.id + '/remove', {
        prescription
    })
    patient.prescriptions = patient.prescriptions.filter(e => e !== prescription)
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
    return patients;
}
export function getUpdatedPatient(patient){
    return patients.find(element=>element===patient);
}