import { StyleSheet, Text, View, FlatList, TouchableOpacity, BackHandler, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SeatArrangement from '../components/SeatArrangement'
import { getTime, getNumberOfSeats, getDate, getMovieTitle, getSeatNumbers } from '../slices/bookingSlice'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Bookings } from '../src/models'
import Dialog, { DialogContent } from 'react-native-popup-dialog'

const SeatScreen = () => {
    const [audi, setAudi] = useState(null)
    const TimeAndPlace = useSelector(getTime)
    const totalSeats = useSelector(getNumberOfSeats)
    const seatNumbers = useSelector(getSeatNumbers)
    const Date = useSelector(getDate)
    const movieTitle = useSelector(getMovieTitle)
    const [showDialog, setShowDialog] = useState(false)
    const navigator = useNavigation()

    useEffect(() => {
      const showInfo = movieTitle.shows.shows.find(item => item.name === TimeAndPlace.place)
      const timings = showInfo.timings
      const arrangement = timings.map(item => {
        const maxSeatsRecliner =  Math.floor((Math.random()*((30-16+1))+16))
        const maxSeatsPrimePlus = Math.floor((Math.random()*((60-40+1))+40))
        const maxSeatsPrime = Math.floor((Math.random()*((120-80+1))+80))
        return {
          showTime: item,
          arrangement : [{type: 'recliner', totalSeats: maxSeatsRecliner, oneSide: 10, price: 300, booked: generateBookedSeats(maxSeatsRecliner)},
          {type: 'prime plus', totalSeats: maxSeatsPrimePlus, oneSide: 15, price: 200, booked: generateBookedSeats(maxSeatsPrimePlus)},
          {type: 'prime', totalSeats: maxSeatsPrime, oneSide: 40, price: 150, booked: generateBookedSeats(maxSeatsPrime)}]
        }
      })
      const tempAudi = arrangement.find(item => item.showTime === TimeAndPlace.time)
      setAudi(tempAudi)
    },[])

    function generateBookedSeats(total) {
      const booked = Math.floor(Math.random()*(total+1));
      for (var a=[],i=0;i<booked;++i) a[i]=i;
      return a
     }

    function handleBooking(){
      if(seatNumbers === null){
        setShowDialog(true)
      }else {
        DataStore.save(
          new Bookings({
            place: TimeAndPlace.place,
            time: TimeAndPlace.time,
            seats: {
              "type": seatNumbers.type,
              "seats": seatNumbers.seats
            },
            movie: movieTitle.title,
            movieImage: movieTitle.thumbnail,
            date: `${Date.date} ${Date.month} - ${Date.day}`,
            totalSeats: totalSeats.num
          }))
        navigator.navigate('ConfirmationScreen')
      }
      
    }

  return (
    <View>
    <Header title={'Select Seats'}/>
    <ScrollView style={{width: '100%', height: '90%'}} vertical={true}>
      <FlatList
        data={audi?.arrangement}
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

      <Dialog
        visible={showDialog}
        onTouchOutside={() => {
          setShowDialog(false);
        }}
      >
        <DialogContent>
              <View style={tw`w-60 h-10 rounded-lg flex items.center justify-center`}>
                <Text style={tw`text-lg text-gray-600 text-center mt-4`}>Please Select Seats</Text>
              </View> 
        </DialogContent>
      </Dialog>
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