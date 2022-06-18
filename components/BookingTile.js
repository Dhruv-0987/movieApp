import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const BookingTile = ({data, toDelete}) => {
    
  return (
    <View style={tw`flex-row items-start mt-4 rounded-md shadow-md justify-start  mr-4 ml-4 border-gray-200 bg-gray-100`}>
      <Image style={tw`h-65 mb-2 w-40 ml-4 mt-4 rounded-md`}
      source={{uri: data.movieImage}}/>
      <View style={tw`flex items-start justify-center ml-2 mt-3`}>
        <Text style={tw`text-xl text-center text-gray-600 max-w-45`}>{data.movie}</Text>
        <Text style={tw`text-lg text-gray-600`}>{data.date}</Text>
        <Text style={tw`text-lg text-gray-600`}>{data.place} - {data.time}</Text>
        <Text style={tw`text-lg text-gray-600`}>Seats: Total {data.totalSeats}</Text>
        <FlatList 
            style={tw`max-w-40`}
            data={data.seats.seats}
            horizontal={false}
            keyExtractor={(item)=> item}
            numColumns={2}
            renderItem={(item) => {
                return (
                    <Text style={tw`text-xs`}>{data.seats.type}-{item.item} </Text>
                )
            }}
        />
        <Image source={{uri: 'https://www.oreilly.com/library/view/qr-codes-for/9781118370711/images/9781118370711-fg0101_fmt.png'}}
        style={tw`h-20 w-20 m-2`}/>
        <Text style={tw`text-mg`}>Use This at the counter</Text>
        <TouchableOpacity onPress={()=>toDelete(data.id)}
        style={tw`h-10 w-35 rounded-lg bg-purple-400 m-4 ml-0`}>
            <Text style={tw`text-center text-white mt-2`}>Delete Booking</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default BookingTile

const styles = StyleSheet.create({})