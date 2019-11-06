import React, { useState } from "react";

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

     setTeamMember({name: "", email:"",role:""});


    }


return (
<div>
<form onSubmit = {submitHandler}>
<h1>{teamMember.name}</h1>
<label htmlFor="name">Name:</label>
<input
onChange={handleChanges}
id="name"
type="text"
name="name"
value={teamMember.name}
/>

<label htmlFor="email">Email:</label>
<input
onChange={handleChanges}
id="email"
type="text"
name="email"
value={teamMember.email}

/>

<label htmlFor="role">Role:</label>
<textarea
onChange={handleChanges}
id="role"
type="text"
name="role"
value={teamMember.role}

/>
<button type="submit">Submit</button>
</form>

</div>

)

}

export default TeamList;