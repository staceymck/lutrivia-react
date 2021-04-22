import React from 'react'

export default class Button extends React.Component {

  state = {
    btnClass: ""
  }

  // applyColor = () => {
  //   console.log(this.props.isCorrect)
  //   if (this.props.isCorrect !== "NA") {
  //     if (this.props.isCorrect === false && this.state.clicked) {
  //       return "false"
  //     } else {
  //       return "true"
  //     }
  //   }
  //   return ""
  // }

  onClick = (e) => {
    this.props.handleClick(e)
    if (this.props.isCorrect === true) {
      this.setState({btnClass: "correct"})
    } else {
      this.setState({btnClass: "incorrect"})
    }
    // let btnClass = ""
    // console.log(this.props.isCorrect)
    // if (this.props.isCorrect === true) {
    //   btnClass = "true"
    // } else if (this.props.isCorrect === false) {
    //   btnClass = "false"
    // }

    // console.log(btnClass)
    // this.setState({
    //   btnClass: btnClass
    // })
  }

  render() {
    return (
      <button 
        className={`btn ${this.state.btnClass}`}
        name={this.props.name}
        onClick={this.onClick}
        disabled={this.props.answered}
      >
        {this.props.text}
      </button>
    )
  }
}

