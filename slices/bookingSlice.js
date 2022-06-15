import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieTitle: null,
    date: null,
    time: null,
    numberOfSeats: null,
    seatNumbers: null
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setMovieTitle: (state, action) => {
            state.movieTitle = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        },
        setTime: (state, action) => {
            state.time = action.payload
        },
        setNumberOfSeats: (state, action) => {
            state.numberOfSeats = action.payload
        },
        setSeatNumbers: (state, action) => {
            state.seatNumbers = action.payload
        }
    }
})

export const {setMovieTitle, setDate, setNumberOfSeats, setSeatNumbers, setTime} = bookSlice.actions

export const getMovieTitle = (state) => state.book.movieTitle;
export const getDate = (state) => state.book.date;
export const getNumberOfSeats = (state) => state.book.numberOfSeats;
export const getSeatNumbers = (state) => state.book.getSeatNumbers;
export const getTime = (state) => state.book.time
export default bookSlice.reducer
