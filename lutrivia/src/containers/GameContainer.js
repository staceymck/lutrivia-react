import React from 'react'
import Header from '../components/Header';
import QuestionList from '../components/QuestionList';
import ScoreForm from '../components/ScoreForm';
import data from '../data.js'

export default class GameContainer extends React.Component {

  state = {
    score: 0,
    questions: data.questions
  }

  newGame = () => {
    this.setState({score: 0})
  }

  updateScore = (value) => {
    this.setState(state => {
      return {
        score: state.score + value
      }
    })
  }

  render() {
    return (
      <>
        <Header newGame={this.newGame} score={this.state.score} />
        <QuestionList questions={this.state.questions} score={this.state.score} updateScore={this.updateScore} />
        <ScoreForm />
      </>
    )
  }
}