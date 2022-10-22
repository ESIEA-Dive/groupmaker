import React from 'react';
import { AllTeams, AllTeamMembers } from '../components';

const Employees = ({TeamSelection, EmployeeClick, selectedTeam, employees}) => {
  
  return (
    <main className='container'>
        <div className='row justify-content-center mt-3 mb-3' >
            <div className='col-8'>
                <AllTeams
                selectedTeam = {selectedTeam}
                TeamSelection = {TeamSelection} />
            </div>
        </div>
        <div className='row justify-content-center mt-3 mb-3'>
            <div className='col-8'>
                <div className='card-collection'>
                    <AllTeamMembers
                        selectedTeam={selectedTeam}
                        EmployeeClick={EmployeeClick}
                        employees={employees} />      
                </div>
            </div>
        </div>
    </main>
  )
};

export default Employees;