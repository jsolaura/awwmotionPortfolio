import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	smoothScroll: false,
}

const commonSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setSmoothScroll(state, action) {
			state.smoothScroll = action.payload;
		},
	}
})

export const commonActions = commonSlice.actions;
export default commonSlice.reducer;

