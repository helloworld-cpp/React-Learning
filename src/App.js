import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import ParentComponents from './components/ParentComponents';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

function App() {
  return (
    <div className="App">
      <LifeCycleA></LifeCycleA>
      
      {/* <Form></Form> */}

      {/* <Stylesheet primary = {true}> </Stylesheet> */}

      {/* <NameList> </NameList> */}

      {/* <UserGreeting> </UserGreeting> */}

      {/* <ParentComponents> </ParentComponents> */}

      {/* <EventBinding> </EventBinding> */}

      {/* <FunctionClick> </FunctionClick> */}

      {/* <ClassClick> </ClassClick> */}

      {/* <Greet name = "farhan"> 
        <p>Hello hello hellooo</p>
      </Greet> */}

      {/* <Greet name = "yash"> </Greet>
        <button>Action</button> */}

      {/* <Greet name = "pooja"> </Greet> */}

      {/* <Welcome name = "mac"> </Welcome> */}

      {/* <Welcome name = "linux"> </Welcome> */}

      {/* <Welcome name = "windows"> </Welcome> */}

      {/* <Hello></Hello> */}

      {/* <Message> </Message> */}

      {/* <Counter> </Counter> */}

    </div>
  );
}

export default App;
