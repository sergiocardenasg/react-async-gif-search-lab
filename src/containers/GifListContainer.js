import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }
    
    handleSubmit = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=84TJqflJDCMMzaf9LHvWA2i3U9O90L3t`)
          .then(res => res.json())
          .then(({data}) => this.setState({gifs: data.map(
              gif => ({
                  url: gif.images.original.url
                })).slice(0, 3)
        }))
    }

    componentDidMount() {
        this.handleSubmit()
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
