import React, { useState } from 'react';

const Teams = ({employees, selectedTeam, setTeam }) => {

    const [group, setGroup] = useState(Team());

    function Team() {
        let teams = [];

        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = {team:'TeamA', members:teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true};
        teams.push(teamA);

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = {team:'TeamB', members:teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true};
        teams.push(teamB);

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = {team:'TeamC', members:teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true};
        teams.push(teamC);

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = {team:'TeamD', members:teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true};
        teams.push(teamD);

        let noTeam = employees.filter((employee) => employee.teamName === '');
        let teamNone = {team:'NoTeam', members:noTeam, collapsed: selectedTeam === '' ? false : true};
        teams.push(teamNone);
        
        return teams;
    }

    const handleTeam = (event) => {
        let changedTeam = group.map((groupData) => groupData.team === event.currentTarget.id
        ? {...groupData, collapsed : !groupData.collapsed}
        : groupData);
  
        setGroup(changedTeam);
        setTeam(event.currentTarget.id);
      };
  
  return (
    <main className='container'>
     { group.map((item)=> {
        return (
            <div key={item.team} className='card mt-2' style={{ cursor:'pointer' }}>
                <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeam}>
                    Team Name : {item.team}
                </h4>

                <div id={'collapse_' + item.team} className={item.collapsed === true ?'collapse' : ''}>
                    <hr/>
                    {
                        item.members.map((member) => {
                            return (
                                <div key={member.id} className='mt-2'>
                                    <h5 className='card-title mt-2'>
                                        <span>Full Name: {member.fullName}</span>
                                    </h5>
                                    <p>Designation : {member.designation}</p>
                                </div>

                            );
                        })
                    }

                </div>
            </div>
        );
     })};
    </main>
    
  )
};

export default Teams;