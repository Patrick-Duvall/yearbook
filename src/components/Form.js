import React from 'react'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {name: '', quote: '', superlative: '', image: ''}
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitForm = event => {
    event.preventDefault()
    let newStudent = {
      id: Date.now(),
      ...this.state
    }
    this.props.addStudent(newStudent)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({name: '', quote: '', superlative: '', image: ''})
  }

  render() {
    return(
      <form>  
        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <input
          type='text'
          name='quote'
          placeholder='quote'
          value={this.state.quote}
          onChange={e => this.handleChange(e)}
        />
        <input
          type='text'
          name='superlative'
          placeholder='superlative'
          value={this.state.superlative}
          onChange={e => this.handleChange(e)}
        />
        <input
          type='text'
          name='image'
          placeholder='image'
          value={this.state.image}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={e => this.submitForm(e)}>Add Student</button>
      </form>
    )
  }
}

export default Form