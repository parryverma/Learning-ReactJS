
import './App.css';
let myName= ("prashant is my name")

function App() {
  console.log("hiiiiiappppppiiiii");
  return (
    <div className="App">
      <div className='App-header' >
        {myName}
        <Demo> </Demo>
      </div>
      
    </div>
  );
}
function Demo() {
  console.log("hiiiiiiiiii");
  return (
    <div className="App">
      <div className='App-header' >
        demo
      </div>
    </div>
  );
}

export default App;
