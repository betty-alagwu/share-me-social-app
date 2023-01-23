import React, { useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home'
import { gapi } from 'gapi-script'
import { fetchUser } from './utils/fetchUser'

gapi.load('client:auth2', () => {

  gapi.auth2.init({
      clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
      plugin_name: 'chat',
  });
});


const App = () => {
  const navigate = useNavigate()

  useEffect(() => { 
    const user = fetchUser()

    if (!user) {
      navigate('/login')
    }
  }, [])
  return (
    <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App
