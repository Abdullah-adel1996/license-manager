import React, {useState} from 'react';
import SidlabTable from '../../shared/table/SidlabTable';
import { tableConstants } from '../../shared/table/tableConstant';


const Customers = () => {

    const [data] = useState([
        {
            name: 'Ahmed',
            email: 'test1@gmail.com',
            mobile: '123456789'
        },
        {
            name: 'Khaled',
            email: 'test2@gmail.com',
            mobile: '123456789'
        },
        {
            name: 'Dina',
            email: 'test3@gmail.com',
            mobile: '123456789'
        },
    ])

    return (
        <div style={{width:'60%', display:'flex', justifyContent:'center'}}>
            <SidlabTable data={data} cols={tableConstants()}/>
        </div>
    )
}

export default Customers
