import React ,{useState, useEffect} from 'react'
import '../style/Sidebartop.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IBOY from '../style/IBOY.jpg'
import Login from './Login'
import axios from 'axios'
// import { accessUrl } from '../useAuth'

export default  function SidebBarTop() {
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

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
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
            
        })
        // console.log(searchArtists);
        setArtists(data.artists.items)

    }
   
    const renderArtists = () => {
        return artists.map(artist => (
            <div className='resultdiv' key={artist.id}>
                {artist.images.length ? <img width={"30%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
               
                <div className='cht'>
                    <small> {artist.name}</small>
                     <player><PlayCircleIcon/></player>
                </div>
            </div>
        ))
        
    }
    console.log(artists.popularity)
    console.log(artists);


    return(
        <div className='mt1'>
            <div className="sidebar-header">
            <a href='\'>
                <img
                    src={IBOY}
                    className='SlideBar-img'
                    alt='App logo'
                />
            </a>
            {!token ?
                    <Login/>
                    : <button onClick={logout}>Logout</button>} 
        
            <form className="searchForm"  onSubmit={searchArtists}>
                    <div className='inpbtn'>
                            <input type="text" placeHolder="search" className="searchInput" onChange={e => setSearchKey(e.target.value)}/>
                            <button type={"submit"} className='searchBtn'>go</button>
                    </div>
                    {renderArtists()}
                   
            </form>
            </div>
        </div>
        
      
    )
}
