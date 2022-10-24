export const patients = [

    {
        id:12321312,
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
                date:Date.now(),
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
        allergies:['Milk','Penicilin',],
        diseases:['Diabetes','Heart',],
        height:1.78,
        weight:65,
    },

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

export function addPrescription(patient,prescription){
    prescription.medicine=medicineOptions[prescription.medicineId-1].title;
    patient.prescriptions.push(prescription);
}

export function removePrescription(patient,prescription){
    patient.prescriptions = patient.prescriptions.filter(e => e !== prescription)
}

export function getUpdatedPatient(patient){
    return patients.find(element=>element===patient);
}