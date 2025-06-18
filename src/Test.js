import './App.css';
import Random from './Random.js';

function Test(props){
  return (
    <h1 id="test">I am {props.name} and i am {props.age} years old</h1>
  );
}

function Objectasprops(props){
      return <h1>I am {props.brand.model}</h1>;
}

function App() {
  var name ="Prachi";
  var age = "23";
  var carInfo = {brand:'pR',model:'test'};
  return (
    <div className="App">
    <Name />
    <Random name={name}/>
    <Test name={name} age= {age} />
    <Objectasprops brand={carInfo.brand}/>
    </div>
  );
}

function Name(){
  return (
   <div>
    <p>My name is Prachi</p>
    <p>I am 23 years old person.</p>
   </div>
  );
}



export default App;
