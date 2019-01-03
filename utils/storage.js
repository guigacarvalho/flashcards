
import { AsyncStorage } from 'react-native'

export async function getDecks() {
    let response = await AsyncStorage.getItem('listOfDecks');
    let decks = await JSON.parse(response) || {};
    return decks;
  }

export async function addInitialDecks () { 
  let listOfDecks =  {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  };

    await AsyncStorage.setItem('listOfDecks', 
      JSON.stringify(listOfDecks)); 
}

export async function addDeck (deckTitle) { 
  let deck = {}
  deck[deckTitle]= {
    questions: []
  }
  let listOfDecks = await getDecks();

  listOfDecks[deckTitle] = { 
    title: deckTitle,
    questions:[] 
  }

  await AsyncStorage.setItem('listOfDecks', 
    JSON.stringify(listOfDecks)); 

}

export async function addCardToDeck (card, deck) {
  deck.questions.push(card);
  let listOfDecks = await getDecks();
  listOfDecks[deck["title"]] = deck;

  await AsyncStorage.setItem('listOfDecks', 
    JSON.stringify(listOfDecks)); 
}

export async function getDeck (deckId) { 
  const listOfDecks = await getDecks();
  return listOfDecks[deckId];
}

