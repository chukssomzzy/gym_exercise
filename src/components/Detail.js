import React from 'react'
import {Typography,Stack,Button} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import targetImage from '../assets/icons/target.png'
import equipmentImage from '../assets/icons/equipment.png'

const Detail = ({exercisesDetail}) => {
    const {bodyPart,gifUrl,name,target,equipment} = exercisesDetail
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        
        {
            icon: targetImage,
            name: target
        },
        {
            icon: equipmentImage,
            name: equipment
        }
    ]
  return (
      <Stack gap="60px" sx={{flexDirection:{lg:"row"},p:"20px",alignItems:"center"}}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
      <Stack sx={{gap:{lg:'35px',xs:"20px"}}}>
      <Typography variant="h3" >
      {name}
      </Typography>
      <Typography variant="h6">
         Exercise keeps you strong and fit. {name} {" "} is one of the best exercise to target your {target}. It would help you improve your mood and gain strength. 
      </Typography>
      {
          extraDetail.map((item,index)=>(
              <Stack key={item.name} direction="row" alignItems="center" gap="24px" sx={{background:"#ff2db", borderRadius:"50%", width:"100%", height:"100px"}}
                  >
                  <Button>
                  <img src={item.icon} alt={ item.name } style={{width:"50px",height:"50px"}}/> 
                  </Button>
                  <Typography variant="h5" textTransform="capitalize">
                  { item.name }
                  </Typography>
                  </Stack>
          ))
      }
      </Stack>
      </Stack>
  )
}

export default Detail
