import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import { exerciseOptions,fetchData,youtubeOptions} from '../utils/fetchData.js'
import {Detail,SimilarExercises,ExerciseVideos} from '../components'
const ExercisesDetail = () => {
  const [exercisesDetail, setExercisesDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscle, setTargetMuscle] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])
  const {id} = useParams()
    /*use Effect */


        useEffect(()=>{
            const fetchExerciseData = async ()=>{
                const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`
                const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`
                const ExercisesDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
                setExercisesDetail(ExercisesDetailData)
                const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${ExercisesDetailData.name}`,youtubeOptions) 
                setExerciseVideos(exerciseVideoData.contents)
                const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${ExercisesDetailData.target}`,exerciseOptions)
                const equipmentMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${ExercisesDetailData.equipment}`,exerciseOptions)
                setEquipmentExercises(equipmentMuscleExercisesData)
                setTargetMuscle(targetMuscleExercisesData)
            } 
            fetchExerciseData()
        },[id])
  return (
      <Box>
          <Detail exercisesDetail={exercisesDetail}/>
          <ExerciseVideos exerciseVideos={exerciseVideos} name={exercisesDetail.name} />
          <SimilarExercises targetMuscleExercises={targetMuscle} equipmentExercises={equipmentExercises}/>
      </Box>
  )
}

export default ExercisesDetail
