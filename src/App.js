import React, { Component } from 'react';
import logo from './the_dot_logo.png';
import './App.css';

// Access all components from `muicss/react` module
import { Appbar, Button, Col, Container, Divider, Form, Input, Panel, Row } from 'muicss/react';

import moment from 'moment'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Birthday Countdown Demo</h2>
        </div>
            <Container>
            <Form>
               <Row>
                  <Input value="08/04/1961" />
                  <Input value="Barack Obama" />
                  <Input value={parseInt(moment('1961-08-04').fromNow() )} />
                  <Input value="Next Birthday in ..." />
               </Row>
            </Form>
            </Container>
      </div>
    );
  }
}

export default App;
