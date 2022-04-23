import axios from "axios";
import React, { useEffect, useState } from "react";
import ContestRender from "../../components/contest/ContestRender";

function ContestPage() {
  // state
  const [contests, setContests] = useState([])

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

  console.log("CONTEST:", contests)  
  return (
    <div>
      <ContestRender contests={contests} />
    </div>
  )
}

export default ContestPage;