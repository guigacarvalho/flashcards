import React, { Component } from 'react';
import { getDecks, addInitialDecks } from './utils/storage'
import { setLocalNotification } from './utils/helpers'
import { MainNavigator } from './utils/navigation'

export default class App extends Component {

  componentDidMount(){
    setLocalNotification()
    addInitialDecks().done(
      getDecks().done((t)=>{
        this.setState(t);
    }));
  }

  render() {
    return (
      <MainNavigator />
    );
  }
}