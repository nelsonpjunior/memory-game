import * as types from '../utils/constants';

export function addPlayer(info) {
  return {
    type: types.addPlayer,
    info,
  };
}

export function removePlayer() {}
