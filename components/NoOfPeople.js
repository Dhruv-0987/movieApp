import { StyleSheet, Text, View, FlatList , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { setNumberOfSeats } from '../slices/bookingSlice'
import tw from 'twrnc'
import { useDispatch } from 'react-redux'

const NoOfPeople = ({selected}) => {
    const noOfPeople = ["1", '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const [numPeople, setNumPeople] = useState(null)
    const dispatch = useDispatch()
    const handleNumberOfPeople= (item) => {
        setNumPeople(item)
        dispatch(setNumberOfSeats({
            num: item
        }))
    }
    console.log('selected', selected)
  return (
    <View style={tw`h-25`}>
      <Text style={tw`text-lg text-center text-gray-400 p-2`}>Number Of Persons</Text>
      <FlatList
        data={noOfPeople}
        horizontal
        keyExtractor={(item) => item.item}
        renderItem={(item) => {
            return(
                <TouchableOpacity onPress={()=>handleNumberOfPeople(item.item)}
                style={tw`h-10 m-1 w-10 rounded-full active:bg-purple-200 ${numPeople === item.item ? 'bg-purple-400': ''}`}>
                <Text style={tw`text-center text-lg mt-1 ${numPeople === item.item ? 'text-white': ''}`}>{item.item}</Text>
                </TouchableOpacity>
            )
        }}  
      />
    
    </View>
  )
}

export default NoOfPeople

const styles = StyleSheet.create({})