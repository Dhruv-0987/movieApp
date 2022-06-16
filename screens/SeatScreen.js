import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SeatArrangement from '../components/SeatArrangement'
import { getTime } from '../slices/bookingSlice'
import { useSelector } from 'react-redux'
const SeatScreen = () => {
    const TimeAndPlace = useSelector(getTime)
    let pvrPrimeBooked = generateBookedSeats(120)
    let pvrPrimePlusBooked = generateBookedSeats(60)
    let pvrReclinerBooked = generateBookedSeats(36)
    let inoxPrimeBooked = generateBookedSeats(80)
    let inoxPrimePlusBooked = generateBookedSeats(60)
    let inoxReclinerBooked = generateBookedSeats(18)
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

  return (
    <View>
    <Header title={'Select Seats'}/>
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
    </View>
  )
}

export default SeatScreen

const styles = StyleSheet.create({})