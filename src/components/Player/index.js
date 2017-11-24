import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';
import * as icons from '../icons';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 10px 15px 10px 0;
  opacity: .35;

  ${(props) => props.turn && `
    opacity: 1;
  `};
`;
const Avatar = styled.div`
  height: 62px;
  width: 62px;
`;

const Information = styled.div``;
const PlayerName = styled.h2`
  color: ${colors.red};
  font-weight: 400;
  margin: 0;
  padding: 0;
`;
const Score = styled.h3`
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const Component = (props) => {
  const icon = () => React.createElement(icons[`Player${props.type}`], null);

  return (
    <Wrapper turn={props.turn}>
      <Avatar>
        {icon()}
      </Avatar>
      <Information>
        <PlayerName>{props.info.name}</PlayerName>
        <Score>SCORE: {props.info.score}</Score>
      </Information>
    </Wrapper>
  );
};

Component.propTypes = {
  type: PropTypes.number.isRequired,
  turn: PropTypes.bool.isRequired,
  info: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};

export default Component;
