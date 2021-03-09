import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {startTimer, stopTimer, proceedTimer, pauseTimer, resetTimer} from './redux/action/action'

function App() {

  const dispatch = useDispatch();
  const correntState = useSelector((state) => state.timer);

  return (
    <div className="App">
      <div> Time: ` ${correntState.time}` </div>
        <div>
          <button onClick ={() => dispatch(` ${correntState.isOn}` ? stopTimer() : startTimer())}>Start/Stop</button> 
          <button onClick ={() => dispatch(correntState.isOn ? pauseTimer() : proceedTimer())}>Wait</button>
          <button onClick={dispatch(resetTimer())}>Reset</button>
        </div>
    </div>
  );
}

export default App;

