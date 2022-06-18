import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { getNumberOfSeats, getSeatNumbers, setSeatNumbers } from '../slices/bookingSlice'
const SeatArrangement = ({seats}) => {
    // to display seats
    const [seatArray, setSeatArray] = useState([])
    const totalSeats = useSelector(getNumberOfSeats)
    const seatNumbers = useSelector(getSeatNumbers)
    const dispatch = useDispatch()
    // for all seat numbers
    const [selectedSeats, setSelectedSeats] = useState([])
    // contain seat numbers to change classes
    const [currentSeat, setCurrentSeat] = useState(null)
    const [unselectedSeat, setUnSelectedSeat] = useState(null)
    const allSeats = generateSeatArray()

    useEffect(()=>{
        setSeatArray(allSeats)
        
    },[selectedSeats])
    console.log('totalSeats',totalSeats, seatNumbers)
    function generateSeatArray(){
        var allSeats = []
        for (let i = 1; i <= seats.totalSeats; i++){
            if (checkSeatBooked(i)){
                allSeats.push({
                    value: i,
                    style: styles.booked,
                    selected: false
                })
            }else{
                allSeats.push({
                    value: i,
                    style: styles.basic,
                    selected: false
                })
            }
        }
        return allSeats
    }

    function checkSeatBooked(seatNum){
        return seats.booked.includes(seatNum)
    }

    const handleSeatSelection = (seat) => {
        if (seatNumbers === null || seatNumbers.seats.length < parseInt(totalSeats.num))
        {
            addSelection(seat)
            // for changin the styling
            var selected = seatArray.map((item) => {
                if (item.value === seat.value){
                    return {
                        value: seat.value,
                        selected: true,
                        style: styles.selected
                    }
                }
                return item
            })
            setSeatArray(selected)
        }
    }
    
    function addSelection(seat){
        if(seatNumbers === null || seatNumbers === undefined){
            var temp = []
            temp.push(seat.value)
            dispatch(setSeatNumbers({
                type: seats.type,
                seats: temp
            }))
        }else {
            var temp = []
            temp.push(seat.value)
            dispatch(setSeatNumbers({
                type: seats.type,
                seats: seatNumbers.seats.concat(temp)
            }))
        }
    }

    function removeSelection(){
        var selected = seatArray.map((item) => {
            if (item.selected === true){
                return {
                    value: item.value,
                    selected: false,
                    style: styles.basic
                }
            }
            return item
        })
        setSeatArray(selected)
        if( seatNumbers !== null){
            dispatch(setSeatNumbers(null))
        }
    }

  return (
    <View style={tw`m-2 flex items-center justify-center`}>
    
    <View style={tw`m-2`}>
        <View style={tw`flex-row items-center justify-between m-1`}>
            <Text style={tw` text-md`}>{seats.type}: {seats.price}</Text>
            <TouchableOpacity style={tw`h-6 rounded-full w-15 bg-purple-400`}
            onPress={removeSelection}>
                <Text style={tw`text-center text-white`}>reset</Text>
            </TouchableOpacity>
        </View>
        
        <FlatList
            data={seatArray}
            horizontal={false}
            numColumns={12}
            keyExtractor={(item)=>item.value}
            renderItem={(item) => {
                return(
                    <View style={tw`flex-row`}>
                        <View style={tw`${item.item.value % 6 === 0 ? 'mr-2' : ''}`}>
                            <TouchableOpacity   style={item.item.style} onPress={()=>handleSeatSelection(item.item)}
                            >
                                <Text style={tw`text-center`}>{item.item.value}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}
        />
    </View>
    
    </View>
  )
}

export default SeatArrangement

const styles = StyleSheet.create({
    basic: {
        margin: 2, 
        width: 25, 
        height: 20,
        borderWidth: 1,
        borderColor: '#A7F3D0',
    },
    booked:{
        backgroundColor: '#9CA3AF',
        margin: 2, 
        width: 25, 
        height: 20,
        borderWidth: 1,
        borderColor: '#A7F3D0'
    },
    selected: {
        backgroundColor: '#34D399',
        margin: 2, 
        width: 25, 
        height: 20,
        borderWidth: 1,
        borderColor: '#A7F3D0'
    }
})