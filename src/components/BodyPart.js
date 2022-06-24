import React from 'react'
import {Stack,Typography} from '@mui/material'
import Icon from "../assets/icons/gym.png"
const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card" sx={{
        backgroundColor:'#fff',
        borderBottomLeftRadius:'20px',
        width:'270px',
        height:'280px',
        cursor: 'pointer',
        gap:'47px',
        borderTop: bodyPart===item?'4px solid #ff262f':'',
    }}
      onClick={()=>{
          setBodyPart(item)
          window.scrollTo({top:1800,left:100,behavior:'smooth'})
      }}
      >
      <img src={Icon}
      alt="dumb bell"
      style={{width:"40px",height:"40px"}} 
      />
      <Typography fontSizs="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">{item}</Typography>
      </Stack>
  )
}

export default BodyPart
