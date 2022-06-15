import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { setDate } from '../slices/bookingSlice'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
const DatePicker = () => {
    const dispatch = useDispatch()
    const [week, setWeek] = useState([])
    const [currentDate, setCurrentDate] = useState(new Date())
    const [currentMovie, setCurrentMovie] = useState(null)
    var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthOfYear =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
    
    useEffect(()=>{
        const todayDate = new Date()
        const dateArray = []
        for (let i=0;i < 7; i++){
            const tempDate = new Date()
            tempDate.setDate(todayDate.getDate() + i)
            dateArray.push({
                date: tempDate.getDate(),
                day: dayOfWeek[tempDate.getDay()],
                month: monthOfYear[tempDate.getMonth()]
            })
        }
        setWeek(dateArray)
    },[])

    const handleDateSelect = (item) =>{
        dispatch(setDate({
            date: item.date,
            day: item.day,
            month: item.month
        }))
    }

  return (
    <View>
        <FlatList 
            data={week}
            keyExtractor={(item)=>item.date}
            horizontal
            renderItem={(item) => {
                return(
                <View style={tw`flex-row h-20 items-center justify-center`}>
                    <TouchableOpacity onPress={()=>handleDateSelect(item.item)}>
                        <View style={tw`h-[20px] w-10 bg-gray-100 mb-4`}>
                            <Text style={tw`font-semibold text-md text-center`}>{item.item.date}</Text>
                            <Text style={tw`font-semibold text-md text-center`}>{item.item.day}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={tw`h-full w-[2px] bg-gray-400 mr-4 ml-4`}></View>
                </View>
                
                )
            }}
        />
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({})