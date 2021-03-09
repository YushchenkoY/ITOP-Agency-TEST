import {START_TIMER, STOP_TIMER, PROCEED_TIMER, PAUSE_TIMER, RESET_TIMER} from '../action/action'
import {createStore, combineReducers} from 'redux'


const initialState = {
    isOn: false,
    time: 0
};

  // format(time) {
  //   const pad = (time, length) => {
  //     while (time.length < length) {
  //       time = '0' + time;
  //     }
  //     return time;
  //   };
    
  //   time = new Date(time);
  //   let h = pad(time.getHours().toString(), 2),
  //       m = pad(time.getMinutes().toString(), 2),
  //       s = pad(time.getSeconds().toString(), 2);
    
  //   return `${h} : ${m} . ${s}`
  // };


const timerReduser = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return {
                ...state,
                isOn: true,
                //offset: action.offset
            };
        case STOP_TIMER:
            return {
                ...initialState
            };
        case PROCEED_TIMER:
            return {
                ...state,
                isOn: true,
                //offset: action.offset
            };
        case PAUSE_TIMER:
            return {
                ...state,
                isOn: false,
            };
        case RESET_TIMER:
            return {
                ...initialState
            };
        default:
            return state;
    }
}

const store = createStore(
    combineReducers ({
        timer: timerReduser,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;