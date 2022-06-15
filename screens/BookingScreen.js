import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import tw from 'twrnc'
import DatePicker from '../components/DatePicker'
import { useSelector } from 'react-redux'
import { getMovieTitle } from '../slices/bookingSlice'
import TimeAndPlace from '../components/TimeAndPlace'
const BookingScreen = () => {
    
    const [shows, setShows] = useState(null)
    const currentMovie = useSelector(getMovieTitle)
    
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
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})