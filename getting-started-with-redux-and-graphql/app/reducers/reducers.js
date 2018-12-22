import Immutable from 'immutable';

const immutableState = Immutable.Map({
  fetching: false, //initial state of immutable set to false
  data: Immutable.Map({}) //data is empty : Immutable.Map({})
})


//Reducer tales 2 signatures: state and action. state is set initial value Immutable state from above
export const queryReducer = (state = immutableState, action) => {
  switch (action.type) {
    //begin data query
    case "STARTING_REQUEST":
      return state.set("fetching", true);

    //ending data query
    case "FINISHED_REQUEST":
      return state.set("fetching", false).set("data", Immutable.Map(action.response.data.goldberg));
    default:
      return state
  }
}