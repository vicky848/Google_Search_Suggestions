// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props

  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion-description">{suggestion}</p>

      <button type="button" className="button-act" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          className="arrow-item"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
