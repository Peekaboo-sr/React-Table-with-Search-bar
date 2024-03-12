import React, {useState} from 'react';
import "./DataTable.css";

const DataTable = ({data}) =>{

    const [searchTerm, setSearchTerm] = useState('');
    const filteredTable = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()));


    return(
        <div className='dataTable'>
        <p>Table From Child</p>
        <input type='text' placeholder='Enter Name here...' value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}></input>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            </thead>
                
        {filteredTable.map((item) =>
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
        </tr>
        )}

        </table>
        
       
        </div>

    )
}

export default DataTable;