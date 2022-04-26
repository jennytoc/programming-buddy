import axios from "axios";
import React, { useEffect, useState } from "react";
import ContestRender from "../../components/contest/ContestRender";
import Pagination from "../../components/Pagination";
import './ContestPgStyles.css'

function ContestPage() {
  // state
  const [contests, setContests] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(()=>{
    getContestList()
  }, [])

  const getContestList = () => {
    axios.get("https://kontests.net/api/v1/all").then(
      (response) => {
        const data = response.data
        console.log(data)
        const elements = []
        for (let i=0; i < 25; i++) {
          elements.push(data[i])
        }
        setContests(elements)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = contests.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <header className="contest-head"></header>
      <h2 className="news-title">Try out these challenges</h2>
      <ContestRender contests={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={contests.length} paginate={paginate}/>
    </div>
  )
}

export default ContestPage;