import { useNavigate } from "react-router-dom"
import LanguageChoices from "../../data/LanguageChoices.json"
import { Button, Form } from "react-bootstrap"
import './IDEStyles.css'

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
      <h2 className="lang-title">Select Language</h2>
      <Form onSubmit={ handleSelection } method="POST" className="form-cont">
        <Form.Select name="language-select">
        { renderLanguageChoices() }
        </Form.Select>
        <Button type="submit" style={{backgroundColor: '#1B4965'}} className="mt-4 mb-4">Submit</Button>
      </Form>
    </div>
  )
}

export default SelectIDE;