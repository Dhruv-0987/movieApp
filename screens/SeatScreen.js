import { StyleSheet, Text, View, FlatList, TouchableOpacity, BackHandler, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SeatArrangement from '../components/SeatArrangement'
import { getTime, getNumberOfSeats, getDate, getMovieTitle, getSeatNumbers } from '../slices/bookingSlice'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const SeatScreen = () => {
    const TimeAndPlace = useSelector(getTime)
    const totalSeats = useSelector(getNumberOfSeats)
    const seatNumbers = useSelector(getSeatNumbers)
    const Date = useSelector(getDate)
    const movieTitle = useSelector(getMovieTitle)
    let pvrPrimeBooked = generateBookedSeats(120)
    let pvrPrimePlusBooked = generateBookedSeats(60)
    let pvrReclinerBooked = generateBookedSeats(36)
    let inoxPrimeBooked = generateBookedSeats(80)
    let inoxPrimePlusBooked = generateBookedSeats(60)
    let inoxReclinerBooked = generateBookedSeats(18)
    const navigator = useNavigation()
    useEffect(() => {
      
    },[])

    const seatNumbersPvr = [{type: 'recliner', totalSeats: 36, oneSide: 10, price: 300, booked: pvrReclinerBooked},
    {type: 'prime plus', totalSeats: 60, oneSide: 15, price: 200, booked: pvrPrimePlusBooked},
    {type: 'prime', totalSeats: 120, oneSide: 40, price: 150, booked: pvrPrimeBooked}
     ]
     const seatNumbersInox = [{type: 'recliner', totalSeats: 18, oneSide: 10, price: 250, booked: inoxReclinerBooked},
    {type: 'prime plus', totalSeats: 60, oneSide: 15, price: 200, booked: inoxPrimePlusBooked},
    {type: 'prime', totalSeats: 80, oneSide: 40, price: 180, booked: inoxPrimeBooked}
     ]

    function generateBookedSeats(total) {
      const booked = Math.floor(Math.random()*(total+1));
      for (var a=[],i=0;i<booked;++i) a[i]=i;
      a = shuffleArray(a)
      return a
     }

    function shuffleArray(array){
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
     }

    function handleBooking(){

    }

  return (
    <View>
    <Header title={'Select Seats'}/>
    <ScrollView style={{width: '100%', height: '90%'}} vertical={true}>
      <FlatList
        data={TimeAndPlace.place === 'PVR' ? seatNumbersPvr : seatNumbersInox}
        keyExtractor={(item)=>item.type}
        horizontal={false}
        renderItem={(item)=>{
            return(
                <SeatArrangement seats={item.item}/>
            )
        }}
      />

      <View style={tw`mt-6`}>
        <Text style={tw`text-center text-2xl text-gray-300`}>All Eyes This Way Please</Text>
      </View>

      <TouchableOpacity style={tw`h-10 w-60 bg-purple-400 rounded-full m-10 ml-18`}
      onPress={handleBooking}>
        <Text style={tw`text-white text-xl text-center mt-1`}>Confirm Booking</Text>
      </TouchableOpacity>
     
      </ScrollView>
      
    </View>
  )
}

export default SeatScreen

const styles = StyleSheet.create({})