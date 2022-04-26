import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import ProBuddyAPI from "../../api/ProBuddyAPI";
import ForumRender from "../../components/forum/ForumRender";
import './ForumStyles.css'

function ForumPage() {
  const item = "forums"
  // states
  const [forumLists, setForumLists] = useState([])

  // effects
  useEffect(()=>{
    loadForumLists()
  }, []) // Change once we add authentication features for admin

  const loadForumLists = async () =>{
    const data = await ProBuddyAPI.getAllItems(item)
    setForumLists(data ? data : [] )
  }

  // render
  const renderForumLists = () => {
    return forumLists.map((forum) => {
      return <ForumRender key={forum.id} forum={ forum }/>
    })
  }

  return (
    <div>
      <h1 className="forum-title">Forum</h1>
      <div className="forum-item-div">
        <Row className="forum-items">
          <Col>
            <h3 className="main-title">Section Title</h3>
          </Col>
        </Row>
      </div>
      { renderForumLists() }
    </div>
  )
}

export default ForumPage;