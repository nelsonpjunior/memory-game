import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import configure from '../store';
import Board from '../components/Board';
import Sidebar from '../components/Sidebar';

const store = configure();

const Wrapper = styled.section`
  height: 100vh;
  overflow-y: auto;
  display: flex;
`;

export default () => (
  <Provider store={store}>
    <Wrapper>
      <Sidebar />
      <Board />
    </Wrapper>
  </Provider>
);
