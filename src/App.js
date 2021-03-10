import './App.css';
import { useState } from "react"
import { interval } from 'rxjs';
import { startWith, scan} from 'rxjs/operators';

const createObservable$ = (startValue = 0) => {
  return interval(1000).pipe(
    startWith(startValue),
    scan(t => t + 1)
  );
};

function App() {

  const [observe, setObserve] = useState(); // состояние подписки
  const [isRun, setRun] = useState(false); // состояние активности процесса работы
  const [countdownInSeconds, setCountdownValue] = useState(0); // состояние секундомера 
  const [runActiv, setRunActiv] = useState(false) // состояние кнопки СТАРТ/СТОП


  // Поведение по нажатию кнопок
  // Старт
  const startTimer = () => {
    setRunActiv(true)
    setRun(true);
    setObserve(createObservable$()
      .subscribe((v) => {
        setCountdownValue(v);
      }));
  };
  // Стоп и Сброс
  const resetTimer = () => {
    setRunActiv(false)
    setCountdownValue(0);
    setRun(false);
    observe.unsubscribe();
    setObserve(null);
  };
  // Ожидание 
  const waitTimer = () => {
    if (isRun) {
      setRun(false);
      observe.unsubscribe();
      setObserve(null);
    } else {
      setRun(true);
      setObserve(createObservable$(countdownInSeconds)
        .subscribe((v) => {
          setCountdownValue(v);
        }));
    }
  };

  // вывод результата в формате 00:00:00
  let hours = Math.floor(countdownInSeconds / 60 / 60);
  let minutes = Math.floor(countdownInSeconds / 60) - (hours * 60);
  let seconds = countdownInSeconds % 60;
  let clock = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');



  return (
    <div className="App">
      <div className="App-timer"> Time: {clock} </div>
        <div>
          <button className="App-button" onClick ={isRun ? resetTimer : startTimer}>{runActiv ? 'STOP' : 'START'}</button> 
          <button className="App-button wait" onClick = {waitTimer}  >WAIT</button>
          <button className="App-button" onClick={resetTimer}>RESET</button>
        </div>
    </div>
  );
};

export default App;