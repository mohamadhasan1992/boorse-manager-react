import * as actionTypes from '../actions/wholePropertyActions';

const initialState = {
  initValue: 120,
  difficulty: [
    {
      id: 1,
      difficultyName: "بالا",
      difficultyStatus: true,
      difficultyValue: "high",
      devisionNumber: 2,
    },
    {
      id: 2,
      difficultyName: "متوسط",
      difficultyStatus: false,
      difficultyValue: "medium",
      devisionNumber: 3,
    },
    {
      id: 3,
      difficultyName: "کم",
      difficultyStatus: false,
      difficultyValue: "low",
      devisionNumber: 4,
    },
  ],
  showResult: false,
};

const reducer = (state=initialState,action) => {
    switch (action.type) {
      case actionTypes.GET_INITIAL_VALUE:
        return {
            ...state,
            initValue:action.event.target.value
        };
      case actionTypes.GET_DIFFICULTY_VALUE:
          const newDifficulty = [];
          state.difficulty.map((el) => {
              if(el.difficultyValue === action.event.target.value){
                  el.difficultyStatus = true;

              }else{
                  el.difficultyStatus = false;
              }
              return newDifficulty.push(el);
          });
        return {
            ...state,
            difficulty:newDifficulty
        };
      case actionTypes.ADD_WHOLE_PROPERTY:
        return {
            ...state,
            showResult:true
        };
      case actionTypes.UPDATE_WHOLE_PROPERTY:
        return {};
    default:
        return state;
    }
}

export default reducer;

  