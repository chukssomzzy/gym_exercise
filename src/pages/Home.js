import React,{ useState} from 'react'
import {Box} from "@mui/material"
import {HeroBanner,Exercises,SearchExercises} from "../components"
const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      {/* <Box>
      {Testing}
          </Box> */  }
       <Exercises setExercises={setExercises} bodyPart={bodyPart}exercises={exercises} />
      </Box>
  )
}

export default Home
