import {configureStore} from "@reduxjs/toolkit";
import authorization from './slices/authorizationSlice'
import eventsList from './slices/eventsSlice'

export default configureStore({
    reducer: {
        authorization: authorization,
        eventsList: eventsList
    }
});
