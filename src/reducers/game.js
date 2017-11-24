import * as types from '../utils/constants';

const initialState = {
  fetching: false,
  fetched: false,
  error: '',
  matches: 0,
  finished: false,
  started: false,
  cards: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.fetchImages:
      return { ...state, fetching: true };

    case types.fetchImagesRejected:
      return { ...state, fetching: false, error: action.payload };

    case types.startGame:
      return {
        ...initialState,
        fetching: false,
        fetched: true,
        cards: action.cards,
        started: true,
      };

    case types.endGame:
      return {
        ...state,
        finished: true,
      };

    case types.flipCard:
      return {
        ...state,
        cards: action.cards,
      };

    case types.matchCount:
      return {
        ...state,
        matches: state.matches + 1,
      };

    case types.match:
      return {
        ...state,
        cards: action.cards,
      };

    default:
      return state;
  }
}
