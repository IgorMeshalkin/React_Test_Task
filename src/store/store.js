import {configureStore} from "@reduxjs/toolkit";
import authorization from './slices/authorizationSlice'

export default configureStore({
    reducer: {
        authorization: authorization
    }
});
