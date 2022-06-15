import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SeatArrangement from '../components/SeatArrangement'
const SeatScreen = () => {
    const seatNumbers = [{type: 'prime', totalSeats: 60, oneSide: 30},
     {type: 'prime plus', totalSeats: 30, oneSide: 15},
     {type: 'recliner', totalSeats: 20, oneSide: 10}]
  return (
    <View>
    <Header title={'Select Seats'}/>
      <FlatList
        data={seatNumbers}
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