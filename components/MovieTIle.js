import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useDispatch } from 'react-redux'
import { setMovieTitle } from '../slices/bookingSlice'
import { useNavigation } from '@react-navigation/native';

const MovieTIle = ({movie}) => {
    
    const dispatch = useDispatch() 
    const navigator = useNavigation()
    const handleBookTickets = () => {
      dispatch(setMovieTitle({
        title: movie.title,
        formats: movie.formats,
        languages: movie.languages,
        rating: movie.rating,
        thumbnail: movie.thumbnail,
        cast: movie.cast,
        trailer: movie.trailerLink,
        information: movie.information,
        cast: movie.cast,
        shows: movie.shows
      }))
      navigator.navigate('MovieScreen')
    }

  return (
    <View style={tw`flex-row items-center mt-4 rounded-md shadow-md justify-start h-70 mr-4 ml-4 border-gray-200 bg-gray-100`}>
      <Image style={tw`h-60 w-40 ml-4 rounded-md`}
      source={{uri: movie.thumbnail}}/>
      <View style={tw`flex items-start ml-2`}>
      <View>
        <Text style={tw`text-xl max-w-40 text-gray-600 font-semibold`}>{movie.title}</Text>
        <Text >{movie.formats}</Text>
        <Text>Rating: {movie.rating}%</Text>
        <Text>{movie.languages}</Text>
        </View>
        <TouchableOpacity onPress={handleBookTickets} style={tw`mt-10 bg-[#bdb2ff] h-10 w-40 rounded-md`}>
          <Text style={tw`text-center mt-2 text-white font-semibold`}>Book Tickets Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MovieTIle

const styles = StyleSheet.create({})