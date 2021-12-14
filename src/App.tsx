
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { Loggedin } from './components/state/Loggedin';
import { User } from './components/state/User';
import { UserDetails } from './components/context/User'
import { Status } from './components/Status';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { CounterValue } from './components/class/CounterValue';

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
        }}
      />

      <Input  
        value='' 
        handleChange={ event => console.log(event)}
      />

      <Container styles={{border: ' 1px solid black' , padding : '1rem'}} />

        <Loggedin />
        <User />

        <Counter />

        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>

        <UserContextProvider>
          <UserDetails />
        </UserContextProvider>

        <DomRef />
        <MutableRef/>

        <CounterValue message="The count is"/>

      

    </div>
  );
}

export default App;
