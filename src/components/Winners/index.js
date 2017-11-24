import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { orderBy } from 'lodash';
import { Trophy } from '../icons';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 50px 20px 0;
  top: 20%;
  left: calc(50% - 150px);
  width: 300px;
  position: absolute;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, .05);
`;

const Icon = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  position: absolute;
  top: -40px;
  left: 50%;
  margin-left: -40px;
  width: 80px;
`;

const Winners = styled.div``;
const Winner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  position: relative;

  :first-child {
    &::after {
      content: 'winner';
      display: block;
      position: absolute;
      right: 0;
      color: green;
    }
    & span,& div, & h2, & h3  {
      color: #f29b1f;
    }
  }
  :nth-child(2) {
    & span,& div, & h2, & h3  {
      color: #b5bbbd;
    }
  }

  :nth-child(3) {
    & span,& div, & h2, & h3  {
      color: #e25318;
    }
  }
`;

const WinnerName = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const WinnerScore = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

const Ranking = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 15px;
  flex: none;
  border: 2px solid currentColor;
  width: 60px;
  height: 60px;
  > span {
    font-size: 2rem;
  }
`;

const PlayerInfo = styled.div``;

const Component = (props) => {
  const players = orderBy(props.players, 'score', 'desc');
  return (
    <Wrapper>
      <Icon><Trophy /></Icon>
      <Winners>
        {players.map((player, i) => (
          <Winner key={i}>
            <Ranking>
              <span>{i + 1}</span>
            </Ranking>
            <PlayerInfo>
              <WinnerName>{player.name}</WinnerName>
              <WinnerScore>{player.score}</WinnerScore>
            </PlayerInfo>
          </Winner>
        ))}
      </Winners>
    </Wrapper>
  );
};

Component.defaultProps = {
  players: [],
};

Component.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
};

export default Component;
