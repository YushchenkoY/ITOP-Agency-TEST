import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {startTimer, stopTimer, proceedTimer, pauseTimer, resetTimer} from './redux/action/action'

function App() {

  const dispatch = useDispatch();
  const correntState = useSelector((state) => state.timer.time),
        n = useSelector((state) => state.timer.isOn);

  return (
    <div className="App">
      <div className="App-timer"> Time: {correntState} </div>
        <div>
          <button className="App-button" onClick ={() => dispatch(n ? stopTimer() : startTimer())}>{n ? 'STOP' : 'START'}</button> 
          <button className="App-button" ondblClick ={() => dispatch(n ? pauseTimer() : proceedTimer())}>WAIT</button>
          <button className="App-button" onClick={dispatch(resetTimer())}>RESET</button>
        </div>
    </div>
  );
}

export default App;

