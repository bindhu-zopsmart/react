//import logo from './logo.svg';
import './App.css';

import Greet from './component/greet';//Functional component and props method
import Welcome from './component/Welcome';//class component and props method
import Hello from './component/Hello';
import Messages from './component/Messages'//states
import Counter from './component/Counter'//Setstate
import FunctionClick from './component/FunctionClick'//Event handling in functional component
import ClassClick from './component/ClassClick';//Event handling in class component
import Eventbind from './component/EventBind';
//import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';//conditional rendering
import NameList from './component/NameList';//List rendering
import Indexoflist from './component/Indexoflist';//index as keys
import StyleSheet from './component/Stylesheet';
function App() {
  return (
    <div className="App">
      <StyleSheet/>

      <Indexoflist/>
      <NameList/>
      <UserGreeting/>
      <Eventbind/>
      <ClassClick/>
      <FunctionClick/>
      <Counter/>

      <Messages />
      <Greet name="Brunce" heroname="batman">
        <p>this is a children props</p>
      </Greet>
      <Greet name="clark" heroname="Superman">
        <button>action</button>
      </Greet>
      <Greet name="Diana" heroname="Wonderwomen"></Greet>

      <Welcome name="Brunce" heroname="batman"></Welcome>
      <Welcome name="clark" heroname="Superman"></Welcome>
      <Welcome name="Diana" heroname="Wonderwomen"></Welcome>

      <Hello/>
      
    </div>
  );
}

export default App;
