import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import { DataStore } from 'aws-amplify'
import { Movies } from '../src/models'
import MovieTIle from '../components/MovieTIle'
import Header from '../components/Header'
const HomeScreen = () => {
    const [movies, setMovies] = useState(null)
    const [fetched, setFetched] = useState(false)
    const getMovies = async () => {
        await DataStore.query(Movies).then(res => {
            setMovies(res)
            if (movies != null && movies != undefined){
                setFetched(true)
                
            }
        })
    }
    useEffect(() => {
        getMovies()
    }, [])
   

  return (
    <SafeAreaView style={tw`h-full bg-white w-full`}>
        <Header title={'Pick a Movie'}/>
        <FlatList
            data={movies}
            horizontal={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
                    return(
                        <MovieTIle movie={item.item}/>
                    )
            }}
            />
    </SafeAreaView>

  )
}

export default HomeScreen