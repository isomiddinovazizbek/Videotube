import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {Stack,Button,Container,Box} from '@mui/material'
import {Channel, Main, Navbar, VideoDetail, Search} from '../'

const App=()=> {
  return (
   <Box>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/channel/:id' element={<Channel/>}/> 
      <Route path='/video/:id' element={<VideoDetail/>}/>
      <Route path='/search/:id' element={<Search/>}/>
    </Routes>
   </Box>
  )
}

export default App