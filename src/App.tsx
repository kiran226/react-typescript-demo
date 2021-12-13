
import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {

  const personName = {
    first :'Kiran',
    last : 'Gandikota'
  }

  const nameList = [
    {
      first : 'Kiran',
      last : 'Gandikota'
    },
    {
      first :'Harshini',
      last: 'Gandikota'
    },
    {
      first : 'Gandikota',
      last : 'Royal'
    }
  ]


  return (
    <div className="App">
      OM Namah Sivayah
      <Greet name='Kiran' messageCount={10} isloggedin={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />

      <Heading>Placeholder exists</Heading>

      <Oscar>
        <Heading>Oscar Award goes to Kiran Gandikota</Heading>
      </Oscar>

      <Greet name='Kiran'  isloggedin={true} />

      <Button 
        handleClick={(event,id)=>{
        console.log("Button Clicked", event, id ) 
      }} />

      <Input  
        value='' 
        handleChange={ event => console.log(event)}/>

    </div>
  );
}

export default App;
