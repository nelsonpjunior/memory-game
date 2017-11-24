import * as types from '../utils/constants';

const initialState = {
  list: [],
  currentPlayer: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.addPlayer:
      return {
        ...state,
        list: [...state.list, action.info],
      };

    case types.resetPlayers:
      return initialState;

    case types.nextPlayer:
      return {
        ...state,
        currentPlayer: (state.currentPlayer === state.list.length - 1) ? 0 : state.currentPlayer + 1,
      };

    case types.playerScore:
      return {
        ...state,
        list: [
          ...state.list.slice(0, state.currentPlayer),
          {
            ...state.list[state.currentPlayer],
            score: state.list[state.currentPlayer].score + 1,
          },
          ...state.list.slice(state.currentPlayer + 1),
        ],
      };

    default:
      return state;
  }
}
