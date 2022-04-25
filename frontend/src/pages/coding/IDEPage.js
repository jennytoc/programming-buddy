import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import LanguageChoices from "../../data/LanguageChoices.json"

function IDEPage() {
  const { language } = useParams();

  // state
  const [languageSrc, setLanguageSrc] = useState(null)

  // Effect
  useEffect(()=>{
    getCompiler()
    // eslint-disable-next-line
  }, [])

  const getCompiler = () => {
    return LanguageChoices.map((item) => {
      if (language === item.value) {
        setLanguageSrc(item)
      }
    })
  }

  // JDoodle IDE Script
  useEffect(()=> {
    const script = document.createElement('script');

    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script)
    }

  }, [])

  return (
    <div>
      <div><h2>{ languageSrc && languageSrc.label } IDE </h2></div>
      <div data-pym-src={ languageSrc && languageSrc.source }></div>
    </div>
  )
}

export default IDEPage;
