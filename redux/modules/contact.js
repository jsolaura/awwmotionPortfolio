import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openContactForm: false,
}

const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setOpenContactForm(state, action) {
			state.openContactForm = action.payload;
		},
	}
})

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;

