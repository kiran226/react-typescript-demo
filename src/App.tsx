
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

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
    </div>
  );
}

export default App;
