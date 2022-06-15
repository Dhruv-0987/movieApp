import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
const SeatArrangement = ({seats}) => {
    const [seatArray, setSeatArray] = useState([])
    console.log(seats)
    
    useEffect(()=>{
        const temp = []
        for (let i = 1; i < seats.oneSide; i++){
            temp.push(i)
        }
        setSeatArray(temp)
    },[])
    console.log(seatArray)
  return (
    <View style={tw`m-2`}>
        <FlatList
            data={seatArray}
            horizontal={false}
            numColumns={6}
            keyExtractor={(item)=>item}
            renderItem={(item) => {
                return(
                    <View>
                        <TouchableOpacity style={tw`h-2 w-2 border border-green-200`}>
                            <Text>{item.item}</Text>
                        </TouchableOpacity>
                    </View>
                )
                
            }}
        />
    </View>
  )
}

export default SeatArrangement

const styles = StyleSheet.create({})