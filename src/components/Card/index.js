import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';

const Wrapper = styled.div`
  align-self: flex-start;
  background-color: ${colors.red};
  border-radius: 5px;
  border-right: 0;
  border-bottom: 0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .15), inset 0 -5px 0 rgba(0, 0, 0, .15);
  cursor: pointer;
  flex: none;
  margin: 5px 0;
  position: relative;
  transition: .2s;
  width: calc(1 / 6 * 100% - (1 - 1 / 6) * 20px);

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5), inset 0 -5px 0 rgba(0, 0, 0, .15);
  }

  ${(props) => props.flipped && `
    pointer-events: none;
    background-color: ${colors.grey};
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5), inset 0 -5px 0 rgba(0, 0, 0, .15);
  `}

  ${(props) => props.matched && `
    pointer-events: none;
    background-color: ${colors.white};
    opacity: .5;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5), inset 0 -5px 0 rgba(0, 0, 0, .15);
  `}
`;

const Content = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;

  > img {
    max-width: 100%;
  }
`;

const Component = (props) => {
  const { data, index, flipHandler } = props;

  const clickHandler = (e) => {
    e.preventDefault();
    flipHandler(index, data);
  };

  return (
    <Wrapper
      onClick={clickHandler}
      flipped={data.flipped}
      matched={data.matched}
    >
      <Content>
        <img src={data.image} alt="card back" />
      </Content>
    </Wrapper>
  );
};

Component.propTypes = {
  index: PropTypes.number.isRequired,
  flipHandler: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ])).isRequired,
};

export default Component;
