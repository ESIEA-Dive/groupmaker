import React from 'react';
import { images } from '../constant';

const Employees = ({TeamSelection, EmployeeClick, selectedTeam, employees}) => {
  
  return (
    <main className='container'>
        <div className='row justify-content-center mt-3 mb-3' >
            <div className='col-8'>
                <select className='form-select form-select-ig' value={selectedTeam} onChange={TeamSelection}>
                    <option value='TeamA'>Team A</option>
                    <option value='TeamB'>Team B</option>
                    <option value='TeamC'>Team C</option>
                    <option value='TeamD'>Team D</option>
                </select>
            </div>
        </div>
        <div className='row justify-content-center mt-3 mb-3'>
            <div className='col-8'>
                <div className='card-collection'>
        {
            employees.map((employee) => (
                <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor:'pointer' }} onClick = {EmployeeClick}>

                    {(employee.gender === 'male') ?
                        <img src={images.male} className='card_img-top' />
                        :
                        <img src={images.female} className='card_img-top' />
                    }

                    <div className='card-body'>
                        <h5 className='card-title'> Full Name : {employee.fullName} </h5>
                        <p className='card-text'> Designation : {employee.designation} </p>

                    </div>

                </div>
            ))
        }       
        </div>
            </div>
        </div>
    </main>
  )
};

export default Employees;