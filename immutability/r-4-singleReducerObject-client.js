import { createStore} from "redux";

const reducer = function(state, action){
	if(action.type == "INC"){
		return state + action.payload;
	}
	if(action.type == "DEC"){
		return state - action.payload;
	}
	return state;
}

//inject reducer and default object
const store = createStore(reducer, {
	user: {
		name: "Will",
		age: 35
	},
	tweets: []

})

//we can now subscribefor changes and update the application regarding changes

store.subscribe(()=>{
	console.log("Store changed",store.getState());
})

//We send data that will update the current by dispatching

store.dispatch({type: "INC", payload:1});
store.dispatch({type: "INC", payload:2})
store.dispatch({type: "INC", payload:22})
store.dispatch({type: "DEC", payload:1000})