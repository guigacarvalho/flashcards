import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { getDecks } from '../utils/storage'
import styles from '../utils/styles'

class DeckList extends Component {
    componentDidMount(){
      getDecks().done((t)=>{
        this.setState(t);
      })
    }
    
    componentWillUpdate() {
      getDecks().done((t)=>{
        this.setState(t);
      })
    }
  
    navigateHome = () => {
      this.props.navigation.dispatch(NavigationActions.back({key: 'AddEntry'}))
    }

    renderDeckList() {
        return Object.keys(this.state).map((deck, index) => {
            const { title, questions } = this.state[deck];
            return (<TouchableOpacity key={index} style={styles.deck} onPress={() => this.props.navigation.navigate('DeckView', { deckId: deck })}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subtitle}>
                    {questions.length} questions
                </Text>
            </TouchableOpacity>);
        });
    }

    render () {
        return (
            <View style={styles.containerTop}>
            <Text style={styles.bigTitle}>
                Decks List
            </Text>
                {
                  !!this.state ? 
                    this.renderDeckList()
                    : <Text>Loading...</Text>
                }
            </View>
          );
    }
  }
  
export default DeckList