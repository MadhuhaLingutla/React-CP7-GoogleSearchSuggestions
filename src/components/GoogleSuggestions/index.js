// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ' '}

  searchInputgiven = event => {
    this.setState({searchInput: event.target.value})
  }

  displayselectedsuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state

    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="results-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-image"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              onChange={this.searchInputgiven}
              value={searchInput}
            />
          </div>
          <ul className="suggestions-container">
            {searchResults.map(eachsuggestion => (
              <SuggestionItem
                item={eachsuggestion}
                displayselectedsuggestion={this.displayselectedsuggestion}
                key={eachsuggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
