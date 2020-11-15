import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './Data'
import List from './List';

function App() {
  // destructing array
  const [people,setPeople] = useState(data);
  console.log(data)
  return (
    <div className="App">
        <div className="mydiv">
          <h3>{ people.length } Birthday Today</h3>
            <List  people={people}  />

           <button 
           className="btn-clear"
           onClick={()=>setPeople([])}
           >
             Clear All
           </button>
        </div>
    </div>
  );
}

export default App;
