import React,{useEffect,useState} from 'react'
import {Box,Stack,TextField,Button,Typography} from '@mui/material' 
import {fetchData,exerciseOptions} from '../utils/fetchData'
import {HorizontalScrollbar} from '.'
const SearchExercises = ({setBodyPart,setExercises,bodyPart}) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])
    const handleSearch = async ()=>{
        if(search){
        const fetchedData =await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
          const exercisesData = fetchedData.filter(exercise=>(exercise.name.toLowerCase().includes(search)||exercise.target.toLowerCase().includes(search)||exercise.bodyPart.toLowerCase().includes(search)||exercise.equipment.toLowerCase().includes(search)))
        setSearch('')
        setExercises(exercisesData)
        }
    }

/*--- useEffect are here ---*/
    useEffect(() => {
         const fetchExercisesData = async ()=>{
               const bodyPart = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
             setBodyParts(['all',...bodyPart])

         }
        fetchExercisesData()
    }, [])

  return (
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">  
      {/*<Box>
      {bodyParts}
      Testing
          </Box> */}
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="30px" textAlign="center">Awesome Exercises You<br/>
      Should Know
      </Typography>
      <Box position="relative" mb="72px">
      <TextField 
      height="76px" 
      value={search}
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}
      placeholder="Search Exercises" 
      type="text" 
      sx={{input:{fontWeight:'700',border:'none', borderRadius:"4px"},
              width:{lg:'800px',xs:'350px'},
              backgroundColor:'#fff', 
              borderRadius:'40px'}}/> 
      <Button 
      className="search-btn" 
      type="button"
      sx={{backgroundColor:"#ff2625",
              color:"#fff",
              textTransform:"none"
              ,width:{lg:'175px',xs:'80px'},
              fontSize:{lg:'20px',xs:'14px'},
              height:'56px',
              position:'absolute',
              right:'0',
      }}
      onClick={handleSearch}>
      Search
      </Button>
      </Box>
      <Box sx={{position:"relative", width:"100%",p:'20px'}}>
        <HorizontalScrollbar
      data={bodyParts} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}
      isBodyPart/>
      </Box>
      </Stack>
  )
}

export default SearchExercises                     
