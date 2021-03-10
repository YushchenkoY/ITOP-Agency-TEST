import './App.css';


function App() {



  return (
    <div className="App">
      <div className="App-timer"> Time: 0 </div>
        <div>
          <button className="App-button" onClick ={()=>{}}>{true ? 'STOP' : 'START'}</button> 
          <button className="App-button" ondblClick ={()=>{}}>WAIT</button>
          <button className="App-button" onClick={()=>{}}>RESET</button>
        </div>
    </div>
  );
}

export default App;

