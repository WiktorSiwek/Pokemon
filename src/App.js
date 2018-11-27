import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: red;
  color: rgb(0,0,0);
`;

class App extends Component {
  render() {
    return (
      <Container>
        Pokemon Team Creator
      </Container>
    );
  }
}

export default App;
