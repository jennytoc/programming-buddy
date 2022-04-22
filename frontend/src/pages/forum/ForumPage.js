import { useEffect, useState } from "react"
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
      <h1>Forum Page</h1>
      {/* <CreatePost forumLists={forumLists} /> */}
      <div>
        { renderForumLists() }
      </div>
    </div>
  )
}

export default ForumPage;