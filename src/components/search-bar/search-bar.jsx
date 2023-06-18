import React, { useState } from 'react'
import {Search} from '@mui/icons-material'
import {Paper,IconButton} from '@mui/material'
import {colors} from '../../constants/colors'
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const [value,setValue]=useState('')
  const naviget=useNavigate()
  
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log(value);
    if(value){
      naviget(`/search/${value}`)
    }
  }

  return (
    <Paper 
    component={"form"} 
    onSubmit={submitHandler}
    sx={{border:`1px solid ${colors.secondary}`, pl:2, boxShadow:'none',mr:5 }}
    >
        <input type="text" 
        placeholder='Search...' 
        className='search-bar' 
        value={value} 
        onChange={e=>setValue(e.target.value)}/>
        <IconButton type='submit'>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar