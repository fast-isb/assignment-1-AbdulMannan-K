import React from 'react';

function UseTable(props) {

    const {header,list} = props;

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {header.map(head => {
                        return <th scope="col" className="py-3 px-6">{head}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>

    );
}

export default UseTable;