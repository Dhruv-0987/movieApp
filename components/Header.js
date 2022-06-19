import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = ({title}) => {
  const navigator = useNavigation()
  return (
    <SafeAreaView style={tw` rounded-lg`}>
        <View style={tw`w-full bg-[#bdb2ff] text-white h-20 flex-row items-center justify-evenly`}>
            <Text style={tw`text-white text-xl pl-4 max-w-45`}>{title}</Text>
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity style={tw` mr-2 bg-white h-10 w-25 rounded-lg`}
              onPress={()=>navigator.navigate('ConfirmationScreen')}>
                <Text style={tw`text-center mt-2 text-purple-400 text-md`}>Your Bookings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`mr-2 bg-white h-10 w-25 rounded-lg`}
              onPress={()=>navigator.navigate('HomeScreen')}>
                <Text style={tw`text-center mt-2 text-purple-400 text-md`}>Home</Text>
              </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})