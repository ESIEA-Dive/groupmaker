import React from 'react';
import { images } from '../constant';

const AllTeamMembers = ({employees, selectedTeam, EmployeeClick}) => {
  return (
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
  )
};

export default AllTeamMembers;