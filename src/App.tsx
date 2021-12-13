
import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      OM Namah Sivayah
      <Greet name='Kiran' messageCount={10} isloggedin={false} />
    </div>
  );
}

export default App;
