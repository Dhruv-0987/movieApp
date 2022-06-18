import { StyleSheet, Text, View, FlatList, TouchableOpacity, TurboModuleRegistry } from 'react-native'
import React, { useEffect, useState, useSyncExternalStore } from 'react'
import Header from '../components/Header'
import tw from 'twrnc'
import DatePicker from '../components/DatePicker'
import { useSelector , useDispatch} from 'react-redux'
import TimeAndPlace from '../components/TimeAndPlace'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getTime, getDate, getNumberOfSeats, getMovieTitle, setTime, setNumberOfSeats, setDate  } from '../slices/bookingSlice'
import Dialog, { DialogContent } from 'react-native-popup-dialog'
import NoOfPeople from '../components/NoOfPeople'
import { Provider } from 'react-redux'
import { store } from '../store'

const BookingScreen = () => {
    const [shows, setShows] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [showDialog, setShowDialog] = useState(false)
    const currentMovie = useSelector(getMovieTitle)
    const navigator = useNavigation()
    const time = useSelector(getTime)
    const date = useSelector(getDate)
    var numPeople = useSelector(getNumberOfSeats)
    const dispatch = useDispatch()
    const [numPeopleSelected, setNumPeopleSelected] = useState(false)
    useEffect(() => {
        setShows(currentMovie.shows.shows)
        if(date && time){
          setNoDateTime(false)
        }
        setSelectedTime(time)
    },[])

    useFocusEffect(
      React.useCallback(() => {
       dispatch(setTime(null))
       dispatch(setDate(null))
       dispatch(setNumberOfSeats(null))
      }, [selectedTime])
    );

    const handleContinue = () => {
      if (numPeople !== null && time !== null && date !== null){
        navigator.navigate('SeatScreen')
        setNumPeopleSelected(true)
      }else {
        setNumPeopleSelected(false)
      }
    }

  return (
    <View>
      <Header title={'Pick Date and Time'}/>
      <View style={tw`bg-gray-100 m-1 border-gray-100 shadow-md`}>
        <DatePicker/>
      </View>
      <FlatList
        data={shows}
        keyExtractor={(item)=>item.item}
        horizontal={false}
        renderItem={(item) => {
            return (
                <TimeAndPlace show={item.item}/>
            )
        }}
      />
      <Dialog
        visible={showDialog}
        onTouchOutside={() => {
          setShowDialog(false);
        }}
      >
        <DialogContent>
          <Provider store={store}>
              <NoOfPeople selected={numPeopleSelected}/>
          </Provider>  
        </DialogContent>
      </Dialog>
      {date===null || time===null && <Text style={tw`text-yellow-400 m-1 text-center`}>Please Select Both Date and Time</Text>}
      <View style={tw`flex-row items-center justify-center`}>
        <TouchableOpacity onPress={()=>setShowDialog(true)}
        style={tw`w-40 h-15 bg-white m-2  border border-white shadow-md rounded-full`}>
          <Text style={tw`text-xl text-center text-purple-400 mt-1`}>{numPeople !== null ? `${numPeople.num} Persons`: `Select No Of People`}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleContinue}
        style={tw`w-40 h-15 bg-purple-400 m-2 border border-gray-200 rounded-full shadow-md`}>
          <Text style={tw`text-2xl text-center text-white mt-2`}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})