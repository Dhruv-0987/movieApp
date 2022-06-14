import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { getMovieTitle } from '../slices/bookingSlice'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
const MovieScreen = () => {
    const movie = useSelector(getMovieTitle)
    console.log(movie)
  return (
    <View style={tw`h-full bg-white w-full`}>
        <View style={tw`flex items-start justify-start bg-gray-100 
        border-gray-200 shadow-md text-center`}>
            <Image source={{uri: movie.thumbnail}} 
            style={tw`h-60 w-90 rounded-md m-3`}/>
            <View style={tw`flex items-start justify-start m-2 mt-0`}>
                <Text style={tw`text-3xl font-semibold text-gray-600`}>{movie.title}</Text>
                <Text style={tw`bg-gray-300 font-semibold p-2`}>{movie.formats}  {movie.languages}</Text>
                <Text style={tw`font-semibold `}>Rating: {movie.rating}%</Text>
                <Text style={tw`font-semibold `}>{movie.information}</Text>
            </View>
            <View style={tw`flex-row items-center justify-center ml-4`}>
                <TouchableOpacity style={tw`m-2 w-40 h-10 border-gray-400 rounded-lg bg-[#bdb2ff]`}>
                    <Text style={tw`text-center mt-1 text-white font-bold text-lg`}>Watch Trailer!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`m-2 w-40 h-10 border-gray-400 rounded-lg bg-[#bdb2ff]`}>
                    <Text style={tw`text-center mt-1 text-white font-bold text-lg`}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default MovieScreen

const styles = StyleSheet.create({})