import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as playerActions from '../../actions/player';
import * as gameActions from '../../actions/game';
import colors from '../../utils/colors';
import Player from '../Player';
import PlayerForm from '../PlayerForm';

const Wrapper = styled.aside`
  display: flex;
  flex: none;
  flex-direction: column;
  width: 300px;
  padding: 20px;
`;

const Logo = styled.h1`
  color: ${colors.red};
  font-weight: 400;
  font-size: 2.5rem;
  margin: 0 0 50px;
  padding: 0;
  position: relative;
  text-shadow: 2px 1px 0 rgba(0, 0, 0, .8);

  > small {
    color: #000;
    font-size: 1rem;
    left: 0;
    position: absolute;
    text-shadow: none;
    top: calc(100% - 4px);
  }
`;

const Button = styled.button`
  background-color: ${colors.yellow};
  border-radius: 35px;
  border: 0;
  box-shadow: 2px 1px 0 ${colors.red};
  color: ${colors.red};
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 2rem;
  justify-content: center;
  margin-top: 20px;
  outline: none;
  padding: 3px 25px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, .8);
`;

const Component = (props) => (
  <Wrapper>
    <Logo>Memory Game <small>multiplayer</small></Logo>
    {props.players.map((player, i) => (
      <Player
        turn={i === props.currentPlayer}
        key={i}
        type={i + 1}
        info={player}
      />
    ))}
    {(props.players.length < 4 && !props.started) && <PlayerForm addPlayer={props.addPlayer} />}
    {(props.players.length >= 2 && !props.started) && <Button onClick={props.startGame}>NEW GAME</Button>}
  </Wrapper>
);

Component.defaultProps = {
  players: [],
};

Component.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  addPlayer: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  currentPlayer: PropTypes.number.isRequired,
  started: PropTypes.bool.isRequired,
};

function MapStateToProps(state) {
  return {
    players: state.players.list,
    currentPlayer: state.players.currentPlayer,
    started: state.game.started,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPlayer: playerActions.addPlayer,
    startGame: gameActions.startGame,
  }, dispatch);
}

export default connect(MapStateToProps, mapDispatchToProps)(Component);
