import React, { useEffect, useState } from 'react';
import './App.css';
import { interval, merge,  Subject, NEVER } from 'rxjs';
import { mapTo, tap, switchMap, startWith, scan, filter, debounceTime, buffer} from 'rxjs/operators';

const actions$ = new Subject();

const wait$ = actions$.pipe(
  filter(action => action === 'wait'),
  buffer(
    actions$.pipe(debounceTime(300))
  ),
  filter(clickArray => clickArray.length === 2)
);

const stop$ = actions$.pipe(filter(action => action === 'stop'));
const start$ = actions$.pipe(filter(action => action === 'start'));
const reset$ = actions$.pipe(filter(action => action === 'reset'));


const events$ = merge(
  stop$.pipe(mapTo({ count: false, value: 0 })),
  start$.pipe(mapTo({ count: true})),
  wait$.pipe(mapTo({ isWaitAction: true })),
  reset$.pipe(mapTo({ value: 0, count: true })),
);

function App() {
  const [isRun, setRun] = useState(false);
  const [countdownInSeconds, setCountdownValue] = useState(0);

  useEffect(() => {
    const stopWatch$ = events$.pipe(
      startWith({
        count: false,
        speed: 1000,
        value: 0,
        increase: 1
      }),
      scan((state, curr) => {
        if (curr.isWaitAction) {
          setRun(!state.count);
          return { ...state, ...curr, count: !state.count };
        }
        setRun(curr.count);
        return { ...state, ...curr };
      }, {}),
      tap((state) => setCountdownValue(state.value)),
      switchMap((state) =>
        state.count
          ? interval(state.speed).pipe(
          tap(
            _ =>
              (state.value += state.increase)
          ),
          tap(_ => setCountdownValue(state.value))
          )
          : NEVER
      )
    );
    const sw = stopWatch$.subscribe();
    return () => sw.unsubscribe();
  }, []);
  
  const onStart = () => {
    return actions$.next('start');
  };
  
  const onStop = () => {
    return actions$.next('stop');
  };
  
  const onWait = () => {
    return actions$.next('wait');
  };
  
  const onReset = () => {
    return actions$.next('reset');
  };


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
          <button className="App-button" onClick ={isRun ? onStop : onStart}>{isRun ? 'STOP' : 'START'}</button>
          <button className="App-button" onClick ={isRun ? onWait : () => {}}>WAIT</button>
          <button className="App-button" onClick={onReset}>RESET</button>
        </div>
    </div>
  );
}

export default App;