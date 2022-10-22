import React from 'react';

const AllTeams = ({selectedTeam, TeamSelection}) => {
  return (
    <select className='form-select form-select-ig' value={selectedTeam} onChange={TeamSelection}>
        <option value='TeamA'>Team A</option>
        <option value='TeamB'>Team B</option>
        <option value='TeamC'>Team C</option>
        <option value='TeamD'>Team D</option>
    </select>
  )
};

export default AllTeams;