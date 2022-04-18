import { useEffect, useState } from "react"
import ProBuddyAPI from "../api/ProBuddyAPI";
import ForumList from "../components/forum/ForumList";

function ForumPage() {
  // states
  const [forumLists, setForumLists] = useState([])

  // effects
  useEffect(()=>{
    loadForumLists()
  }, []) // Set to props.username once we add authentication features

  const loadForumLists = async () =>{
    const data = await ProBuddyAPI.getAllForums()
    setForumLists(data ? data : [] )
  }

  // render
  const renderForumLists = () => {
    return forumLists.map((forumList) => {
      return <ForumList key={ forumList.id } forumList={ forumList } />
    })
  }

  return (
    <div>
      <h1>Forum Page</h1>
      <div>
        { renderForumLists() }
      </div>
    </div>
  )
}

export default ForumPage;