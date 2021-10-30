import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query: ""
      }
    
      handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGifs(this.state.query)
      }
    
      render() {
        return (
          <div>
            <p> <b>Enter a Search Term:</b> </p>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
              <submit className="btn btn-success" onClick={this.handleSubmit}>Find GIFs</submit>
            </form>
          </div>
        )
      }
}
