
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
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
      <Greet name='Kiran' messageCount={10} isloggedin={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />

      <Heading>Placeholder exists</Heading>

      <Oscar>
        <Heading>Oscar Award goes to Kiran Gandikota</Heading>
      </Oscar>
    </div>
  );
}

export default App;
