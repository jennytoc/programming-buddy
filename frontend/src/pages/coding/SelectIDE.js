import { useNavigate } from "react-router-dom"
import LanguageChoices from "../../data/LanguageChoices.json"

function SelectIDE() {
  const navigate = useNavigate()

  const handleSelection = async (event) => {
    event.preventDefault()

    const selectedData = {
      language: event.target.elements["language-select"].value
    }
    if (selectedData) {
      navigate(`/compiler/${selectedData.language}`)
    }
  }

  // render
  const renderLanguageChoices = () => {
    return LanguageChoices.map((language, index) => {
      return <option key={index} value={language.value}>{language.label}</option>
    })
  }

  return (
    <div>
      <h2>Select Language</h2>
      <form onSubmit={ handleSelection } method="POST">
      <select name="language-select">
        { renderLanguageChoices() }
      </select>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SelectIDE;