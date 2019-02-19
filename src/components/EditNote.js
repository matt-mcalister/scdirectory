import React from "react"

class EditNote extends React.Component {
	constructor(props){
    super(props)
    this.state = {
      showForm: false,
      notes: props.notes
    }
  }

  toggleShowForm = (e) => {
    this.setState({
      showForm: true
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      showForm: false,
      notes: e.target.notes.value
    })
  }

  handleChange = (e) => {
    this.setState({
      notes: e.target.value
    })
  }

	render(){
		if (this.state.showForm) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="notes">Notes: </label>
          <input type="text" name="notes" value={this.state.notes} onChange={this.handleChange} />
        </form>
      )
    } else {
      return (
        <React.Fragment>
          <p><b>NOTES:</b> {this.state.notes}</p>
          <button onClick={this.toggleShowForm}>Edit Note</button>
        </React.Fragment>
      )
    }
	}
}

export default EditNote
