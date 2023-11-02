import React from 'react'
import { useParams } from 'react-router-dom';
import { employeeData } from '../utils/data';
const EmployeeDetail = () => {
    const { id } = useParams();

    const data = employeeData.filter((obj) => { return (obj.id == id) });
    console.log(data);

    return (
        <div>
            <p>{data[0].Name}</p>
        </div>
    )
}

export default EmployeeDetail;