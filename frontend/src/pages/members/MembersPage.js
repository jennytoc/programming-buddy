import { useEffect, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import ProBuddyAPI from "../../api/ProBuddyAPI";
import MembersList from "../../components/members/MembersList";
import LanguageChoices from "../../data/LanguageChoices.json"
import LevelChoices from "../../data/LevelChoices.json"
import './MembersStyle.css'

function MembersPage() {
  // states
  const [members, setMembers] = useState([])
  const [memberProfile, setMemberProfile] = useState([])
  const [filterResults, setFilterResults] = useState([])

  // effects
  useEffect(()=>{
    loadMembers()
  }, [])
  
  const loadMembers = async () =>{
    const item = "users"
    const itemProfiles = "user-profiles"
    const data = await ProBuddyAPI.getAllItems(item)
    const dataProfile = await ProBuddyAPI.getAllItems(itemProfiles)
    setMembers(data ? data : [] )
    setMemberProfile(dataProfile ? dataProfile : [] )
  }

  // event handler
  const handleFilter = (event) => {
    event.preventDefault()
    const language = event.target.elements["filter-language"].value
    const proficiency = event.target.elements["filter-level"].value

    const newMembers = memberProfile.filter((member)=> {
      return member.language === language && member.proficiency === proficiency
    })
    if (newMembers.length !== 0) {
      setFilterResults(newMembers)
    }
  }
  
  // render
  const renderMembers = (membersList) => {
    return membersList.map((member) => {
      return <MembersList key={ member.id } member={ member } />

    })
  }

  const renderFilterItems = (items) => {
    return items.map((item, index) => {
      return <option key={index} value={item.label}>{item.label}</option>
    })
  }

  console.log("FILTERS", filterResults)
  return (
    <div>
      <h1 className="member-title">Members Page</h1>
      <Form onSubmit={ handleFilter } className="filter-bar">
        <Row className="align-items-center">
          <Col xs={2}><Form.Label>Select language:</Form.Label></Col>
          <Col xs={3}>
          <Form.Select name="filter-language">
            { renderFilterItems(LanguageChoices) }
          </Form.Select>
          </Col>
          <Col xs={2}><Form.Label>Select proficiency:</Form.Label></Col>
          <Col xs={3}>
          <Form.Select name="filter-level">
            { renderFilterItems(LevelChoices) }
          </Form.Select>
          </Col>
          <Col xs={1}>
          <Button variant="outline-light" className="submit" type="submit" style={{backgroundColor: "#1B4965"}}>Search</Button>
          </Col>
        </Row>
      </Form>

      { filterResults && filterResults.length > 0 ?
        renderMembers(filterResults) :
        renderMembers(members)
      } 
    </div>
  )
}

export default MembersPage;