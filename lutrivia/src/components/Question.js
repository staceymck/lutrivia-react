import React from 'react'
import '../App.css'
import Button from './Button'

export default class Question extends React.Component {

  state = {
    answered: false
  }

  handleClick = (e) => {
    const buttonVal = e.target.name === "true" ? true : false
    this.setState({
        answered: true
      })

    if (buttonVal === this.props.question.answer) {
      this.setState({isCorrect: true})
      this.props.updateScore(1)
    } else {
      this.setState({isCorrect: false})
    }
    console.log('hi')
  }

  // applyColor = (e) => {
  //   if (this.state.isCorrect !== "NA") {
  //     return this.state.isCorrect ? "true" : "false"
  //   }
  //   return ""
  // }

  render() {
    console.log("re-rendered")
    return (
     
      <div className="question-card">
        {this.props.question.text}
        <div>
          <Button handleClick={this.handleClick} isCorrect={this.props.question.answer === true ? true : false} text="True" name="true" answered={this.state.answered} />
          <Button handleClick={this.handleClick} isCorrect={this.props.question.answer === false ? true : false } text="False" name="false" answered={this.state.answered} />
        </div>
      </div>
    )
  }
 
}

//add isCorrect boolean to button depending on whether it is right or wrong
