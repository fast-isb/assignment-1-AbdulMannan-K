import React from 'react';
import PersonIcon from "@mui/icons-material/Person";

const SideBar = (props) => {
    const {list} = props;
    return (
        <aside className="w-3/12 pt-2" aria-label="Sidebar" data-testid="sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2" style={{listStyle:"none",paddingLeft:"0px"}}>
                    {list.map((patient)=>{
                        return <li>
                            <a name={patient.name}  onClick={props.onClick} style={{textDecoration:"none"}}
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
}

export default SideBar;