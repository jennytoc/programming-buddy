import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ProBuddyAPI from "../api/ProBuddyAPI";
import PostList from "../components/forum/PostList";

function PostListPage(props) {
  // params
  const { section } = useParams()

  // states
  const [postLists, setPostLists] = useState([])

  // effects
  useEffect(()=>{
    loadPostLists()
    console.log("success?")
  }, []) // Change once we add authentication features

  const loadPostLists = async () =>{
    const data = await ProBuddyAPI.getAllPosts()
    setPostLists(data ? data : [] )
    console.log("postList:", data)
  }
  console.log("POSTLIST:", postLists)
  // render
  const renderPostLists = (sectionValue) => {
    let posts = []
    for (let i=0; i < postLists.length; i++) {
      if (postLists[i].forum.value === sectionValue) {
        posts.push(postLists[i])
        console.log("i:", postLists[i])
      }
    }
    console.log("POSTS:", posts)
    return <PostList posts={ posts } />
  }

  return (
    <div>
      <h1>Posts Page</h1>
      <div>
        { renderPostLists(section) }
        
      </div>
    </div>
  )
}

export default PostListPage;