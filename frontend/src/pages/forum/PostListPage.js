import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ProBuddyAPI from "../../api/ProBuddyAPI";
import PostList from "../../components/forum/PostList";

function PostListPage(props) {
  // params
  const { section } = useParams()

  // states
  const [postLists, setPostLists] = useState([])

  // effects
  useEffect(()=>{
    loadPostLists()
  }, []) // Change once we add authentication features/Add new post features

  const loadPostLists = async () =>{
    const posts =[]
    const data = await ProBuddyAPI.getAllPosts()
    for (let i=0; i < data.length; i++) {
      if (data[i].forum_value === section) {
        posts.push(data[i])
      }
    }
    setPostLists(posts ? posts : [])
  }

  // render
  const renderPostLists = () => {
    return postLists.map((post)=>{
      return <PostList key={post.id} post={post} />
    })
  }

  return (
    <div>
      <h1>Posts Page</h1>
      <div>
        { renderPostLists() }
      </div>
    </div>
  )
}

export default PostListPage;