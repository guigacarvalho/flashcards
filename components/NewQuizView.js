import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from '../utils/styles'
import { getDecks } from '../utils/storage'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class NewCard extends Component {
    state = {
        displayQuestion: true,
        correctAnswers: 0,
        currentQuestion: 0,
        finishedQuiz: false,
    }

    static navigationOptions = ({ navigation }) => {
        const { deckId } = navigation.state.params
        return {
            title: deckId
        }
    }

    restartQuiz () {
        this.setState({
            displayQuestion: true,
            correctAnswers: 0,
            currentQuestion: 0,
            finishedQuiz: false,
        });
    }

    toggleQuestionAnswer() {
        const newDisplayQuestion = !this.state.displayQuestion;
        this.setState({displayQuestion: newDisplayQuestion});
    }

    goToNextQuestion = () => {
        const questionsTotal = this.state.questions.length;
        const currentQuestionIndex = this.state.currentQuestion;
        const nextQuestionIndex = currentQuestionIndex + 1;
        const finishedQuiz = questionsTotal <= nextQuestionIndex;

        this.setState(prevState => {
            return finishedQuiz ?
                {finishedQuiz}
                : {currentQuestion: nextQuestionIndex }
        })
        return finishedQuiz;

    }
    
    answerCorrectly () {
        this.setState(prevState => {
            return {correctAnswers: prevState.correctAnswers + 1}
        })
        this.goToNextQuestion();
    }

    answerIncorrectly() {
        this.goToNextQuestion();
    }

    componentDidMount(){
        getDecks().done((t)=>{
            const { deckId } = this.props.navigation.state.params
            this.setState(t[deckId]);
        })
    }
    render() {        
        return (
            !!this.state && !!this.state.questions ?  
            this.renderQuiz()
            : <Text>Loading...</Text>
        );
    }

    resetNotifications() {
        clearLocalNotification()
            .then(setLocalNotification)
    }

    renderFinishedQuiz() {
        const { questions, correctAnswers} = this.state

        this.resetNotifications()

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Congrats!</Text>
                <View > 
                    <Text style={styles.subtitle}>You answered {(correctAnswers/questions.length)*100}% of the questions correctly!</Text>
                    <View style={styles.container}> 
                        <TouchableOpacity onPress={() => this.restartQuiz()} style={styles.blackBtn}>
                            <Text style={styles.whiteTxt}>Restart Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.blackBtn}>
                            <Text style={styles.whiteTxt}>Return to Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    renderQuestion() {
        const { currentQuestion, questions, displayQuestion } = this.state
        const questionNumber = currentQuestion || 0;
        const questionText = questions[questionNumber].question
        const answerText = questions[questionNumber].answer

        return (
            <View style={styles.container}>
                {/* Questions and answers text */}
                <View>
                    <Text style={styles.title}>{displayQuestion ? 'Question' : 'Answer' }</Text>
                    <View>
                        <Text style={styles.subtitle}>{displayQuestion ? questionText : answerText}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.toggleQuestionAnswer()}>
                    <Text style={styles.redTxt}>
                        Show { displayQuestion ? 'Answer' : 'Question'}
                    </Text>
                </TouchableOpacity>

                {/* Buttons Correct and Incorrect */}
                <TouchableOpacity style={styles.greenBtn} onPress={() => this.answerCorrectly()}>
                    <Text style={styles.whiteTxt}>
                        Correct
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.redBtn} onPress={() => this.answerIncorrectly()}>
                    <Text style={styles.whiteTxt}>
                        Incorrect
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderQuiz() {
        const { title, questions, finishedQuiz, currentQuestion } = this.state
        return <View style={styles.containerTop}>
            <Text style={styles.bigTitle}>{title} Quiz {currentQuestion + 1}/{questions.length}</Text>
            { finishedQuiz ? this.renderFinishedQuiz() : this.renderQuestion() }
        </View>;
    }
}
export default NewCard