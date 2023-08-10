import {createSlice} from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: {
        authorizationState: {
            isAuthorization: false,
            isLoading: false,
            isChanged: false
        }
    },
    reducers: {
        successfulAuthorization (state) {
            state.authorizationState.isLoading = false;
            state.authorizationState.isAuthorization = true;
        },
        startLoadingAuthorization(state) {
            state.authorizationState.isLoading = true;
            if (!state.authorizationState.isChanged) {
                state.authorizationState.isChanged = true;
            }
        }
    }
})

export const {successfulAuthorization, startLoadingAuthorization} = authorizationSlice.actions;
export default authorizationSlice.reducer;