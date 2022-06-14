import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieTitle: null,
    placeAndTime: null,
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
        setPlaceAndTime: (state, action) => {
            state.placeAndTime = action.payload
        },
        setNumberOfSeats: (state, action) => {
            state.numberOfSeats = action.payload
        },
        setSeatNumbers: (state, action) => {
            state.seatNumbers = action.payload
        }
    }
})

export const {setMovieTitle, setPlaceAndTime, setNumberOfSeats, setSeatNumbers} = bookSlice.actions

export const getMovieTitle = (state) => state.book.movieTitle;
export const getPlaceAndTime = (state) => state.book.placeAndTime;
export const getNumberOfSeats = (state) => state.book.numberOfSeats;
export const getSeatNumbers = (state) => state.book.getSeatNumbers;

export default bookSlice.reducer
