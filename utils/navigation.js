import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Text, View, FlatList, Platform } from 'react-native';

import DeckList from  '../components/DeckList'
import DeckView from  '../components/DeckView'
import NewDeck from  '../components/NewDeckView'
import NewCard from '../components/NewCardView'
import NewQuiz from '../components/NewQuizView'
import styles from './styles'
import { white, black, red, green, shadow } from './colors'

const Tabs = TabNavigator({
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({tintColor}) => <FontAwesome name='clone' size={28} color={tintColor}/>
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square-o' size={28} color={tintColor}/>
      }
    }, 
  }, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? black : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : black,
        shadowColor: shadow,
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })
  
  
  
  export const MainNavigator = StackNavigator({
    Home: {
      screen: Tabs,
    },
    DeckView: {
      screen: DeckView,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: red,
        }
      }
    },
    NewCard: {
      screen: NewCard,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: red,
        }
      }
    },
    NewQuiz: {
      screen: NewQuiz,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: red,
        }
      }
    }
  })