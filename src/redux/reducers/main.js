import ActionTypes from '../types';

const initialState = {
  quizData: [],
};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.QUIZ_DATA: {
      const data = action.payload;
// console.log(data,'reucer')
      return {...state, quizData: data};
    }

    default: {
      return {...state};
    }
  }
}
