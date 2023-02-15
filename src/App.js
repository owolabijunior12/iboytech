import React, {useEffect,useState}from 'react'
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import { accessUrl } from './useAuth'
console.log(accessUrl);
function App() {
    const [token, setToken] = useState("")

    useEffect (() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    // const logout = () => {
    //     setToken("")
    //     window.localStorage.removeItem("token")
    // }
console.log(token)
  return(
    
      <div className="App">                           
                {!token ?
                     <Login/> : <Dashboard/>
                  
                }
        </div>
  )
}

export default App;