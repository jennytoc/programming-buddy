import React, { useEffect, useState } from "react";
import NewsArticles from "../../components/news/NewsArticles";
import Pagination from "../../components/Pagination";
import './NewsPgStyles.css'

function NewsPage() {
  const axios = require("axios");
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
 
  const options = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: {q: 'programming', lang: 'en', page: '4'},
    headers: {
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      const data = response.data
      const elements = []
      for (let i=0; i < 25; i++) {
        elements.push(data.articles[i])
      }
      setArticles(elements)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <div>
      <header className="news-header">
      </header>
      <h2 className="news-title">Check out what's trending in tech</h2>
      <NewsArticles articles={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={articles.length} paginate={paginate}/>
    </div>   
  )
}

export default NewsPage;