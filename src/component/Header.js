import React, { useState,useEffect } from 'react'
import axios from 'axios'
function Header() {
  const [token, setToken] = useState("")
  // const [searchKey, setSearchKey] = useState("")
  const [Genre, setGenre] =  useState([])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])

  const SearchGenre= async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com//v1/recommendations/available-genre-seeds", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            // q: searchKey,
            type: "genre"
        }
        
    })
    // console.log(searchArtists);
    setGenre(data.Genre.items)
  }
  const renderGenre = () => {
    return Genre.map(artist => (
        <div className='resultdiv' key={artist.id}>
            {Genre.images.length ? <img width={"30%"} src={Genre.images[0].url} alt=""/> : <div>No Image</div>}
           
            <div className='cht'>
                <small> {Genre.name}</small>
                 {/* <player><PlayCircleIcon/></player> */}
            </div>
        </div>
    ))
    
}
// console.log(ar.popularity)
console.log(Genre);

// console.log(Genre);
  return (
    <div>
        {renderGenre}
    </div>
  )
}

export default Header
