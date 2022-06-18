import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { getTime, setTime } from '../slices/bookingSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, } from 'react'
const TimeAndPlace = ({show}) => {
    const [itemSelected, setItemSelected] = useState(null)
    const dispatch = useDispatch()
    const TimeAndPlace = useSelector(getTime)
    const handleTimeSelect = (item) =>{
        dispatch(setTime({
            place: show.name,
            time: item
        }))
        setItemSelected(item)
    }

    
  return (
    <View style={tw`w-80 h-60 bg-gray-100 border-gray-100 shadow-md m-6 ml-8 mb-2`}>
      <Text style={tw`text-3xl font-semibold m-4 text-gray-600 text-purple-400`}>{show.name}</Text>
      <View>
        <FlatList 
            data={show.timings}
            horizontal={false}
            keyExtractor={(item)=>item.item}
            numColumns={3} 
            renderItem={(item) => {
                return (
                    <View>
                    <TouchableOpacity onPress={()=>handleTimeSelect(item.item)}>
                        <View  style={tw`h-10 w-20 border  m-3 ${itemSelected === item.item && TimeAndPlace !== null && TimeAndPlace.place === show.name ? 'border-purple-400': 'border-green-800'}`}>
                            <Text style={tw`text-center mt-2 ${itemSelected === item.item && TimeAndPlace !== null && TimeAndPlace.place === show.name ? 'text-purple-400': 'text-green-800'}`}>{item.item}</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                )
            }}
        />
      </View>
    </View>
  )
}

export default TimeAndPlace

const styles = StyleSheet.create({})