import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const ActorTile = ({actor}) => {
  return (
    <View style={tw`m-2 flex items-center`}>
        <Image source={{uri: actor.photo}} style={tw`h-40 w-30 rounded-md`}></Image>
        <Text style={tw`font-semibold text-center max-w-30 mt-2`}>{actor.name}</Text>
    </View>
  )
}

export default ActorTile

const styles = StyleSheet.create({})