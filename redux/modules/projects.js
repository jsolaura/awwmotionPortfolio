import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openDetail: false,
	projectObj: {}
}

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setOpenDetail(state, action) {
			state.openDetail = action.payload;
		},
		setProjectObj(state, action) {
			state.projectObj = action.payload;
		},
	}
})

export const projectActions = projectsSlice.actions;
export default projectsSlice.reducer;

