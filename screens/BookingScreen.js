import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import tw from 'twrnc'
import DatePicker from '../components/DatePicker'
import { useSelector } from 'react-redux'
import { getMovieTitle } from '../slices/bookingSlice'
import TimeAndPlace from '../components/TimeAndPlace'
import { useNavigation } from '@react-navigation/native'
const BookingScreen = () => {
    
    const [shows, setShows] = useState(null)
    const currentMovie = useSelector(getMovieTitle)
    const navigator = useNavigation()
    useEffect(() => {
        setShows(currentMovie.shows.shows)
    },[])
    
  return (
    <View>
      <Header title={'Pick Date and Time'}/>
      <View style={tw`bg-gray-100 m-1 border-gray-100 shadow-md`}>
        <DatePicker/>
      </View>
      <FlatList
        data={shows}
        keyExtractor={(item)=>item.name}
        horizontal={false}
        renderItem={(item) => {
            return (
                <TimeAndPlace show={item.item}/>
            )
        }}
      />

      <TouchableOpacity onPress={()=>navigator.navigate('SeatScreen')}
      style={tw`w-80 h-15 bg-purple-400 m-2 ml-6 border border-white rounded-md`}>
        <Text style={tw`text-2xl text-center text-white mt-2`}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})