import React from "react";
import Style from "styled-components"

const TeamDisplay = props => {

 const Card = Style.div`
 width:95%;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;


 `;

 const LittleCards = Style.div` 
  border: dotted 2px #670000;
  background-image: url("https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/skzguerwpfjbj4hmgn3a");
  background-repeat:no-repeat;
  background-size: 13%
  margin:2%;
  padding:10px;

 `;

   
return (
<Card>
{props.teamMember.map(member => (
<LittleCards key={member.id}>
<h2>{member.name}</h2>
<h3>{member.email}</h3>
<p>{member.role}</p>

</LittleCards>

))}

</Card>

);

};

export default TeamDisplay;