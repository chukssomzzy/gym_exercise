import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from "@mui/material"
import {fetchData,exerciseOptions } from '../utils/fetchData'
import {ExerciseCard} from '.'
const Exercises = ({exercises,setExercises,bodyPart})=> {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisePerPage = 9
    const indexOfLastExercise = exercisePerPage * currentPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)
    const Paginate = (e,value)=>{
         setCurrentPage(value)
         window.scrollTo({Top:1800,behavior:'smooth'})
    }

    useEffect(()=>{
        const fetchExercisesData = async()=>{
           let fetchedData = []
            if(bodyPart === 'all'){
         fetchedData =await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
            }   else {
            fetchedData =await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
            }
            setExercises(fetchedData)
        }
        fetchExercisesData()
    },[bodyPart,setExercises])

  return (
      <Box id="exercises" sx={{mt:{lg:'110px'}}} mt="50px" p="20px" >

      <Typography variant="h3" mb="46px">
      Showing Result
      </Typography>
      <Stack 
      direction="row" 
      flexWrap="wrap"
      justifyContent="center" 
      sx={{gap:{lg:'110px',xs:'50px'}}}
          >
           {
               currentExercises.map(
                   (item,index)=>(
                   <ExerciseCard key={index} exercise={item}/>
               ))
           }
          </Stack>
      {/*---Pagination Block---*/}
      <Stack mt="100px" alignItems="center">
      {
          (exercises.length > exercisePerPage) && (
              <Pagination color="standard"
              shape="rounded"
              default={1}
              count ={Math.ceil(exercises.length / exercisePerPage)}
              page={currentPage}
              onChange={Paginate}
              size="large"
              />
          )
      }
      </Stack>
      </Box>
  )
}

export default Exercises


