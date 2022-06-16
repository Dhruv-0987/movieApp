import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
const SeatArrangement = ({seats}) => {
    const [seatArray, setSeatArray] = useState([])
    
    useEffect(()=>{
        const temp = []
        for (let i = 1; i <= seats.totalSeats; i++){
            temp.push(i)
        }
        setSeatArray(temp)
    },[])

    function checkSeatBooked(seatNum){
        return seats.booked.includes(seatNum)
    }

    console.log('booked seats',seats.booked)
  return (
    <View style={tw`m-2 flex items-center justify-center`}>
    
    <View style={tw`m-2`}>
        <Text style={tw`ml-3 text-md`}>{seats.type}: {seats.price}</Text>
        <FlatList
            data={seatArray}
            horizontal={false}
            numColumns={12}
            keyExtractor={(item)=>item}
            renderItem={(item) => {
                return(
                    <View style={tw`flex-row`}>
                        <View style={tw`${item.item % 6 === 0 ? 'mr-2' : ''} `}>
                            <TouchableOpacity style={tw`h-4 w-6 m-1 border border-green-200 ${checkSeatBooked(item.item) ? 'bg-gray-400':''}`}>
                                <Text style={tw`text-center`}>{item.item}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}
        />
    </View>
    
    </View>
  )
}

export default SeatArrangement

const styles = StyleSheet.create({})