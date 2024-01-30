import {combineReducers, configureStore} from "@reduxjs/toolkit";
import projects from "./modules/projects";
import common from "./modules/common";
import contact from "./modules/contact";

const rootReducer = combineReducers({
	projects: projects,
	common: common,
	contact: contact,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
export default store;

// const makeStore = (context) => configureStore({
// 	reducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: false,
// 		}),
// })
// const wrapper = createWrapper(makeStore, {
// 	debug: process.env.NODE_ENV !== 'production',
// })
//
// export default wrapper;