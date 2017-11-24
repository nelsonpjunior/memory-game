import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';
import Winners from '../Winners';
import * as actions from '../../actions/game';

const Wrapper = styled.section`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px 50px;
  position: relative;
`;

class Component extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.flipHandler = this.flipHandler.bind(this);
  }

  componentDidUpdate() {
    const { matchCheck } = this.props;
    setTimeout(() => {
      matchCheck();
    }, 500);
  }

  flipHandler(index, card) {
    const { flipCard } = this.props;
    flipCard(index, card);
  }

  render() {
    return (
      <Wrapper>
        {this.props.cards.map((card, i) => (
          <Card
            key={i}
            index={i}
            flipHandler={this.flipHandler}
            data={card}
          />
        ))}
        {this.props.finished && <Winners players={this.props.players} />}
      </Wrapper>
    );
  }
}

Component.defaultProps = {
  cards: [],
  players: [],
};

Component.propTypes = {
  matchCheck: PropTypes.func.isRequired,
  flipCard: PropTypes.func.isRequired,
  finished: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  players: PropTypes.arrayOf(PropTypes.object),
};

function MapStateToProps(state) {
  return {
    cards: state.game.cards,
    finished: state.game.finished,
    players: state.players.list,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    matchCheck: actions.matchCheck,
    flipCard: actions.flipCard,
  }, dispatch);
}

export default connect(MapStateToProps, mapDispatchToProps)(Component);
