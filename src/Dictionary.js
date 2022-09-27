import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import { FaSistrix } from "react-icons/fa";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  let pexelApiKey = "563492ad6f91700001000001f5fade95b4354f25933790ed421af989";
  let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
  const headers = { Authorization: `Bearer ${pexelApiKey}` };
  axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit} className="search-form">
            <div>
              <FaSistrix className="search-icon" />
            </div>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
