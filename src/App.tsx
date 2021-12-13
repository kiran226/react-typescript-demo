
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first :'Kiran',
    last : 'Gandikota'
  }
  return (
    <div className="App">
      OM Namah Sivayah
      <Greet name='Kiran' messageCount={10} isloggedin={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
