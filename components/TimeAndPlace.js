import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { setTime } from '../slices/bookingSlice'
import { useDispatch } from 'react-redux'
const TimeAndPlace = ({show}) => {
    const [isShowSelected, setIsShowSelected] = useState(false)
    console.log('show',show.timings)
    const dispatch = useDispatch()

    const handleTimeSelect = (item) =>{
        dispatch(setTime({
            place: show.name,
            time: item
        }))
    }
    
  return (
    <View style={tw`w-80 h-60 bg-gray-100 border-gray-100 shadow-md m-6`}>
      <Text style={tw`text-3xl font-semibold m-4 text-gray-600 text-purple-400`}>{show.name}</Text>
      <View>
        <FlatList 
            data={show.timings}
            horizontal={false}
            keyExtractor={(item)=>item}
            numColumns={3} 
            renderItem={(item) => {
                return (
                    <View>
                    <TouchableOpacity onPress={()=>handleTimeSelect(item.item)}>
                        <View  style={tw`h-10 w-20 border border-green-800 m-3`}>
                            <Text style={tw`text-center mt-2 text-green-600`}>{item.item}</Text>
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