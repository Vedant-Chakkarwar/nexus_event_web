import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeIndex: 0,
}

const infoCardSlice = createSlice({
    name: "infoCard",
    initialState,
    reducers: {
        changeInfoCard: (state, action) => {
            state.activeIndex = action.payload.activeCard;
        }
    }
});

export const { changeInfoCard } = infoCardSlice.actions;
export default infoCardSlice.reducer;