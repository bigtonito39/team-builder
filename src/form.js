import React, { useState } from "react";
import { Card, CardBody,Button } from "reactstrap";

const TeamList = props =>{
 
    const [teamMember, setTeamMember] = useState({
    name:"",
    email:"",
    role:""
    })

    const handleChanges = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value});
    };

    const submitHandler = event => {
     event.preventDefault();
     const newMember = {
        ...teamMember, id:Date.now()

     }
      props.addNewPlayer(newMember)

      //resets form inputs to empty strings
     setTeamMember({name: "", email:"",role:""});


    }


return (
<Card className="Forms-card" style={{backgroundColor:"#670000"}}>
<form onSubmit = {submitHandler}>

<h1>{`Welcome: ${teamMember.name}`}</h1>
<label htmlFor="name">Name:</label>
<CardBody className="nameForm" >
<input
onChange={handleChanges}
id="name"
type="text"
name="name"
value={teamMember.name}
/>
</CardBody>
<label htmlFor="email">Email:</label>
<CardBody className="emailForm" >
<input
onChange={handleChanges}
id="email"
type="text"
name="email"
value={teamMember.email}

/>
</CardBody>
<label htmlFor="role">Role:</label>
<CardBody className="roleForm" >
<textarea
onChange={handleChanges}
id="role"
type="text"
name="role"
value={teamMember.role}
/>
</CardBody>

<Button type="submit" style={{width:"40%", margin:"2%"}}>Submit</Button>
</form>

</Card>

)

}

export default TeamList;