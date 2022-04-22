import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
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
      <Card border="info">
        <Card.Header as="h4">Topics</Card.Header>
          { renderPostLists() }
      </Card>
      <div className="create-post-btn">
        <Link to={`/forum/${section}/create-post`}>
          <Button variant="outline-primary">Create a Post</Button>
        </Link>
      </div>
    </div>
  )
}

export default PostListPage;