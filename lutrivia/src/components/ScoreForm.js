import React from 'react'

export default class ScoreForm extends React.Component {

  state = {
    name: ""
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //do something with name and final score
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>

    )
  }
}