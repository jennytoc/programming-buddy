import { useEffect, useState } from "react"
import ProBuddyAPI from "../api/ProBuddyAPI";
import PostList from "../components/forum/ForumList";

function PostListPage(props) {
  // states
  const [postLists, setPostLists] = useState([])

  // effects
  useEffect(()=>{
    loadPostLists()
  }, []) // Set to props.username once we add authentication features

  const loadPostLists = async () =>{
    const data = await ProBuddyAPI.getAllPosts()
    setPostLists(data ? data : [] )
  }

  // render
  const renderPostLists = (forumId) => {
    let posts = []
    for (let i=0; i < postLists.length; i++) {
      if (postLists[i].forum == forumId) {
        posts.push(postLists[i])
      }
    }
    return <PostList posts={ posts } />
  }

  return (
    <div>
      <h1>Posts Page</h1>
      <div>
        { renderPostLists(props.key) }
      </div>
    </div>
  )
}

export default PostListPage;