import { shuffle, filter, matches } from 'lodash';
import * as types from '../utils/constants';
import { api, photosUrl } from '../services/api';

export function startGame() {
  return (dispatch) => {
    dispatch({ type: types.fetchImages });
    api.get(photosUrl)
      .then((res) => {
        let cards = res.data.photos.items;

        cards = cards.reduce((acc, item) => {
          const picture = {
            image: item.thumbUrl,
            flipped: false,
            matched: false,
          };
          return acc.concat([picture, picture]);
        }, []);
        dispatch({
          type: types.startGame,
          cards: shuffle(cards),
        });
      })
      .catch((err) => {
        dispatch({ type: types.fetchImagesRejected, payload: err });
      });
  };
}

export function matchCheck() {
  return (dispatch, getState) => {
    const state = getState().game;
    let cards = state.cards;
    const flippedCards = filter(cards, matches({ flipped: true, matched: false }));
    if (flippedCards.length < 2) return;

    if (flippedCards[0].image === flippedCards[1].image) {
      if (state.matches === (types.totalCards - 1)) dispatch({ type: types.endGame });
      cards = state.cards.map((card) => {
        if (card.flipped && !card.matched) {
          return {
            ...card,
            matched: true,
          };
        }
        return card;
      });
      dispatch({ type: types.playerScore });
      dispatch({ type: types.matchCount });
    } else {
      cards = state.cards.map((card) => {
        if (card.flipped && !card.matched) {
          return {
            ...card,
            flipped: false,
          };
        }
        return card;
      });
      dispatch({ type: types.nextPlayer });
    }

    dispatch({
      type: types.match,
      cards,
    });
  };
}

export function flipCard(index, card) {
  return (dispatch, getState) => {
    const state = getState().game;
    dispatch({
      type: types.flipCard,
      cards: [
        ...state.cards.slice(0, index),
        {
          ...card,
          flipped: true,
        },
        ...state.cards.slice(index + 1),
      ],
    });
  };
}
