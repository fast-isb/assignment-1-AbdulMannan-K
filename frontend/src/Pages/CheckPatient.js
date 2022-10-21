import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
const CheckPatient = props => {
    const {patients} = props;
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2" style={{listStyle:"none",paddingLeft:"0px"}}>
                    {patients.map((patient)=>{
                        return <li>
                            <a href="#" style={{textDecoration:"none"}}
                               className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <PersonIcon />
                                <span className="ml-3">{patient.name}</span>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </aside>

    );
};
export default CheckPatient;