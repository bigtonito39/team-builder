import React from "react";

const TeamDisplay = props => {
   
return (
<div>
{props.teamMember.map(member => (
<div key={member.id}>
<h2>{member.name}</h2>
<h3>{member.email}</h3>
<p>{member.role}</p>

</div>

))}
</div>

);

};

export default TeamDisplay;