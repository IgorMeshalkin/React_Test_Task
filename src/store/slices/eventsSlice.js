import {createSlice} from "@reduxjs/toolkit";

const eventsSlice = createSlice({
    name: 'eventsList',
    initialState: {
        eventsList: []
    },
    reducers: {
        addToEventsList (state, action) {
            state.eventsList.push(action.payload)
        },
    }
})

export const {addToEventsList} = eventsSlice.actions;
export default eventsSlice.reducer;