// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {item, displayselectedsuggestion} = props
  const {suggestion} = item

  const selectactivate = () => {
    displayselectedsuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        className="arrow-image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={selectactivate}
      />
    </li>
  )
}

export default SuggestionItem
