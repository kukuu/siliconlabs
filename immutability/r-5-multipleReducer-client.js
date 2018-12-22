
import { combineReducers, createStore} from "redux";


//set initial values using es6 syntax: empty object here
const userReducer = (state = {}, action) => {
	//const newState = (...state)
	//using destructuring to return an unchanged state - because 35 changed to 35
	//However this is not a change in real sense. This is not good practice rather
	//use destructuring to overide  state =(...state, name:action.payload)
	switch(action.type){
		case "CHANGE_NAME": {
			//state.name = action.payload;
			state = (...state, name: action.payload)
			break;
		}
		case "CHANGE_AGE": {
			//state.age = action.payload;
			state = (...state, age: action.payload)
			break;
		}
	}
	return state;
	//return newState;
};

//set initial values using es6 syntax: empty array here. This can be a separate file
//it can use CHANGE_NAME as well and will be decoupled from userReducer. So different reducers can attach
//to different types and be decoupled from each other

const tweetsReducer = (state = [], action) => {
	return state;
}

//we combine the reducers

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
})


//inject reducer and default object. Mind the plurality of reducerS when combined
//these can now be passed as defaults using es6 states to lines 15 and 16
//or they can be put in default statements and passed to the relative reducers as initial load values
/*const store = createStore(reducers, {
	user: {
		name: "Will",
		age: 35
	},
	tweets: []
})*/

// lines 51 to 60 are for boostraping
const.store = createStore(reducers);

//we can now subscribefor changes and update the application regarding changes

store.subscribe(()=>{
	console.log("Store changed",store.getState());
	//without destructuring 35 will be repeated twice as default and new change
	//after using destructuring it reads nothing and then 35. which is the right thing.
})

//We send data that will update the current by dispatching

store.dispatch({type: "CHANGE_NAME", payload:"Will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
