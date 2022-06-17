import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { DataStore } from 'aws-amplify'
import { Bookings } from '../src/models'
import BookingTile from '../components/BookingTile'
import tw from 'twrnc'

const ConfirmationScreen = () => {
    const [bookings, setBookings] = useState([])

    useEffect(()=>{
        getBookings()
    },[])

    const getBookings = async () => {
        await DataStore.query(Bookings).then(res => {
            setBookings(res)
        })
    }

    const deleteBooking = async (id) => {
        await DataStore.delete(Bookings, booking => booking.id("eq", id));
        getBookings()
    }
    
  return (
    <View style={tw`h-full bg-white w-full`}>
    <Header title={'Your Bookings'}/>
    {bookings.length === 0 && <Text style={tw`text-center mt-4 text-xl text-gray-400`}>There Are No Bookings</Text>}
    <ScrollView style={{width: '100%', height: '90%'}} vertical={true}>
    <View>
      <FlatList 
        data={bookings}
        horizontal={false}
        keyExtractor={(item)=> item.id}
        renderItem={(item) => {
            return(
                <BookingTile data={item.item} toDelete={deleteBooking}/>
            )
        }}
      />
      </View>    
      </ScrollView>
    </View>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})