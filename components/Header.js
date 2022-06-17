import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native'

const Header = ({title}) => {
  return (
    <SafeAreaView style={tw`mt-7 rounded-lg`}>
        <View style={tw`w-full bg-[#bdb2ff] text-white h-20 flex-row items-center`}>
            <Text style={tw`text-white text-3xl pl-4`}>{title}</Text>
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})