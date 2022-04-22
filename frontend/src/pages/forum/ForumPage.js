import { useEffect, useState } from "react"
import { Card } from "react-bootstrap";
import ProBuddyAPI from "../../api/ProBuddyAPI";
import ForumRender from "../../components/forum/ForumRender";

function ForumPage() {
  
  // states
  const [forumLists, setForumLists] = useState([])

  // effects
  useEffect(()=>{
    loadForumLists()
  }, []) // Change once we add authentication features for admin

  const loadForumLists = async () =>{
    const data = await ProBuddyAPI.getAllForums()
    setForumLists(data ? data : [] )
  }

  // render
  const renderForumLists = () => {
    return forumLists.map((forum) => {
      return <ForumRender key={ forum.id } forum={ forum } />
    })
  }
  

  return (
    <div>
      <Card border="info">
        <Card.Header as="h4">Forums</Card.Header>
          { renderForumLists() }
      </Card>
    </div>
  )
}

export default ForumPage;