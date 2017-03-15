import React, { Component } from 'react';
import logo from './the_dot_logo.png';
import './App.css';

// Access all components from `muicss/react` module
import { Appbar, Button, Col, Container, Divider, Form, Input, Panel, Row } from 'muicss/react';

import moment from 'moment'


class App extends Component {

  constructor(props){
   super(props);

  } 

   shouldComponentUpdate(nextProps, nextState){
       // return a boolean value
       return true;
   }

   componentDidMount() {
      const BIRTHDAY_BARACK = document.querySelector("#birthday-barack").value;

      //todo: store records in a json object, loop through json object and dynamically assign values instead of hardcoding it
      document.querySelector("#next-birthday-barack").value = this.GetNextBirthday(BIRTHDAY_BARACK).remaining_distance;
   
   }

   componentWillUpdate(nextProps, nextState){
   }

   GetNextBirthday(birthday){

      //current
      let year = moment().year(),
       current_month = moment().format('MM'),
       current_day = moment().format('DD'),
       current_month_day = moment().format('MM/DD');

      //birthday
      let birthday_month = parseInt(moment(birthday).format('MM')),
       birthday_day = parseInt(moment(birthday).format('DD')),
       birthday_month_day = moment(birthday).format('MM/DD');

      //get the birthday for the current year
      let birthday_this_year = year+'/'+birthday_month_day,
       birthday_next_year = moment(birthday_this_year).add(1, 'years');
      
      let remaining_distance = 0

      /** if birthday month and day are the same, then the birthday is today 
      * check to see if the birthday for this year has passed or is upcoming
      */
      
      //birthday alert
      if( current_month_day === birthday_month_day )
      {
         remaining_distance = 365;
      }
      else
      {

         if( moment(birthday_this_year).unix()  > moment().unix() )
         {
            //birthday hasn't happened yet this year
            remaining_distance = moment(birthday_this_year).fromNow();
         }
         else
         {
            //birthday has already passed for the year
            //remaining_distance = moment(birthday_next_year).fromNow();
            remaining_distance = moment().to(moment(birthday_next_year)) 
         }

      }

      return {
               "remaining_distance": remaining_distance
               }
   }

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
                  <Input id="birthday-barack" value="08/04/1961" />
                  <Input value="Barack Obama" />
                  <Input value={parseInt(moment('1961-08-04').fromNow() )} />
                  <Input id="next-birthday-barack" value="Next Birthday in ..." />
               </Row>
            </Form>
            </Container>
      </div>
    );
  }
}
export default App;
