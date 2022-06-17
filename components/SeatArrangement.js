import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import { getNumberOfSeats } from '../slices/bookingSlice'
const SeatArrangement = ({seats}) => {
    // to display seats
    const [seatArray, setSeatArray] = useState([])
    const totalSeats = useSelector(getNumberOfSeats)
    // for all seat numbers
    const [selectedSeats, setSelectedSeats] = useState([])
    const [canSelect, setCanSelect] = useState(true)
    // contain seat numbers to change classes
    const [currentSeat, setCurrentSeat] = useState(null)
    const [unselectedSeat, setUnSelectedSeat] = useState(-1)
    useEffect(()=>{
        const allSeats = generateSeatArray()
        setSeatArray(allSeats)
    },[selectedSeats])

    function generateSeatArray(){
        console.log('generation seats')
        var allSeats = []
        for (let i = 1; i <= seats.totalSeats; i++){
            if (checkSeatBooked(i)){
                allSeats.push({
                    value: i,
                    style: styles.booked,
                    selected: false
                })
            }else if(checkSeatSelected(i)){
                allSeats.push({
                    value: i,
                    style: styles.selected,
                    selected: false
                })
            }
            else if (checkUnselected(i)) {
                allSeats.push({
                    value: i,
                    style: styles.basic,
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

    function checkSeatSelected(seatNum){
        return currentSeat === seatNum
    }

    function checkUnselected(seatNum){
        return unselectedSeat === seatNum
    }

    const handleSeatSelection = (seat) => {
        if (seat.selected){
            seat.selected = !seat.selected
            seat.style = seat.selected ? styles.selected : styles.basic
            var selected = removeItem(selectedSeats, seat.value)
            setSelectedSeats(selected)
            setUnSelectedSeat(seat.value)
        }else if (!seat.selected){
            var selected = selectedSeats
            selected.push(seat.value)
            setSelectedSeats(selected)
            seat.selected = !seat.selected
            seat.style = seat.selected ? styles.selected : styles.basic
            setCurrentSeat(seat.value)
        }   
    }

    function removeItem(array, item) {
        var i = array.length;
    
        while (i--) {
            if (array[i] === item) {
                array.splice(array.indexOf(item), 1);
            }
        }
        return array
    }

    console.log(selectedSeats, currentSeat)
  return (
    <View style={tw`m-2 flex items-center justify-center`}>
    
    <View style={tw`m-2`}>
        <Text style={tw`ml-3 text-md`}>{seats.type}: {seats.price}</Text>
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