import types from '../types';
import store from '../store';
const {dispatch} = store;
export function quizData(data){
  dispatch({
        type: types.QUIZ_DATA,
        payload: data,
      });
}