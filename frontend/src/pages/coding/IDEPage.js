import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import codeWarsID from '../../api/codeWarsID.json'

function IDEPage() {
  const { language, level } = useParams();
  const codeId = null

  // state
  const [idList, setIdList] = useState(codeWarsID)
  const [code, setCode] = useState(null)

  useEffect(()=>{
    getCodeIdList()
  }, [])
  
  const getCodeIdList = () => {
    const newIdList = idList.filter((listId) => {
      return listId.language == language && listId.level == level
    })
    setIdList(newIdList)
  }

  console.log("IDLIST", idList)

  useEffect(()=> {
    const script = document.createElement('script');

    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script)
    }

  }, [])

  useEffect(()=> {
    axios.get(`https://www.codewars.com/api/v1/code-challenges/${codeId}`).then(
      (response) => {
        const data = response.data
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])
  
  return (
    <div>
    <div data-pym-src="https://www.jdoodle.com/embed/v0/4Jhn"></div>
    <form action="https://www.jdoodle.com/api/redirect-to-post/online-java-compiler" method="post">
  Script: <textarea name="initScript" rows="8" cols="80"></textarea>
  <input type="submit" value="Submit" />
</form>
    </div>
  )
}

export default IDEPage;

{/* <script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script> */}