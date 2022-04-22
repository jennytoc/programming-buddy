import { useNavigate } from "react-router-dom"

function SelectIDE() {
  const navigate = useNavigate()

  const handleSelection = async (event) => {
    event.preventDefault()

    const selectedData = {
      language: event.target.elements["language-select"].value,
      level: event.target.elements["level-select"].value
    }
    if (selectedData) {
      navigate(`/compiler/${selectedData.language}/${selectedData.level}`)
    }

  }

  return (
    <div>
      <h2>Select Language and Dificulty</h2>
      <form onSubmit={ handleSelection } method="POST">
      <select name="language-select">
        <option value="JS">JavaScript</option>
        <option value="PY">Python</option>
        <option value="JV">Java</option>
        <option value="CS">C#</option>
        <option value="CP">C++</option>
        <option value="PH">PHP</option>
        <option value="SW">Swift</option>
      </select>
      <select name="level-select">
        <option value="ADV">Advanced</option>
        <option value="INT">Intermediate</option>
        <option value="BEG">Beginner</option>
      </select>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SelectIDE;