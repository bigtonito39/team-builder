    import React, {useState} from 'react';
    import './App.css';
    import TeamList from "./form";
    import TeamDisplay from "./TeamDisplay";



    function App() {
      const [teamMember, setTeamMember] = useState([
        {
      id: 1,
      name:"Jose Reinoso",
      email:"jose.reinoso.39@gmail.com",
      role:" Web dev student"

      }
    ]);

      const addNewPlayer = player => {
      const newPlayer = {
      id: Date.now(),
      name:player.name,
      email:player.email,
      role:player.role
      };
      setTeamMember([...teamMember,newPlayer]);
      };
      console.log(teamMember)
      return (
        <div className="App">
        
        <h1>Lambda School: <strong>Team Builder</strong></h1>      
        
    <TeamList addNewPlayer={addNewPlayer}/>
    <TeamDisplay teamMember={teamMember}/>
        </div>
      );
    }

    export default App;
