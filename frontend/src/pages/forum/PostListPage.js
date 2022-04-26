import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import ProBuddyAPI from "../../api/ProBuddyAPI";
import PostList from "../../components/forum/PostList";
import './ForumStyles.css'

function PostListPage(props) {
  // params
  const { section } = useParams()
  const item = "posts"

  // states
  const [postLists, setPostLists] = useState([])

  // effects
  useEffect(()=>{
    loadPostLists()
  }, []) // Change once we add authentication features/Add new post features

  const loadPostLists = async () =>{
    const posts =[]
    const data = await ProBuddyAPI.getAllItems(item)
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
      <h1 className="forum-title">Topics</h1>
      <div className="forum-item-div">
        <Row className="forum-items">
          <Col>
            <h3 className="main-title">Title</h3>
          </Col>
          <Col>
            <h3 className="main-title">Posted by</h3>
          </Col>
        </Row>
      </div>
      { renderPostLists() }
      <div className="create-btn">
        <Link to={`/forum/${section}/create-post`}><Button variant="secondary" style={{backgroundColor: '#1B4965'}}>Create Post</Button></Link>
      </div>
    </div>
  )
}

export default PostListPage;