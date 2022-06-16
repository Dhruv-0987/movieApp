import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import { getNumberOfSeats } from '../slices/bookingSlice'
const SeatArrangement = ({seats}) => {
    const [seatArray, setSeatArray] = useState([])
    const totalSeats = useSelector(getNumberOfSeats)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [canSelect, setCanSelect] = useState(true)
    var allSeats = []

    useEffect(()=>{
        const createSeatArray = async () => {
            await generateSeatArray()
        }
        createSeatArray()
    },[])

    const generateSeatArray = async () =>{
        const temp = []
        for (let i = 1; i <= seats.totalSeats; i++){
            temp.push({
                value: i
            })
        }
        setSeatArray(temp)
    }

    function checkSeatBooked(seatNum){
        return seats.booked.includes(seatNum)
    }

    function checkSeatSelected(seatNum){
        return selectedSeats.includes(seatNum) 
    }

    
    console.log('seat array',seatArray)
  return (
    <View style={tw`m-2 flex items-center justify-center`}>
    
    <View style={tw`m-2`}>
        <Text style={tw`ml-3 text-md`}>{seats.type}: {seats.price}</Text>
        <FlatList
            data={seatArray}
            horizontal={false}
            numColumns={12}
            keyExtractor={(item)=>item.item}
            renderItem={(item) => {
                return(
                    <View style={tw`flex-row`}>
                        <View style={tw`${data.item.value % 6 === 0 ? 'mr-2' : ''}`}>
                            <TouchableOpacity
                            style={styles.basic}>
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
        margin: '0.25rem', 
        width: '1.5rem', 
        height: '1rem',
        borderWidth: '1px',
        borderColor: '#A7F3D0',
    },
    booked:{
        backgroundColor: '#9CA3AF',
        margin: '0.25rem', 
        width: '1.5rem', 
        height: '1rem',
        borderWidth: '1px',
        borderColor: '#A7F3D0'
    },
    selected: {
        backgroundColor: '#34D399',
        margin: '0.25rem', 
        width: '1.5rem', 
        height: '1rem',
        borderWidth: '1px',
        borderColor: '#A7F3D0'
    }
})