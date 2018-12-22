
//initial Action dispatched 
//payload here is nil. Signature of starting request is empty
//The action creators are injected into the XML HTTP call
//Initially, and into the promise chain




//Action creator
const startingRequest = () => {
  
  return {//Action is injected into the reducer
    type: "STARTING_REQUEST"
  }
}


//Finished request
//payload is response
const finishedRequest = (response) => {
  return {
    type: "FINISHED_REQUEST",
    response: response
  }
}

export const getGraph = (payload) => {
  return dispatch => {
    dispatch(startingRequest());
    return new Promise(function(resolve, reject) {
      let request=new XMLHttpRequest();
      request.open("POST", "/graphql", true);
      request.setRequestHeader("Content-Type", "application/graphql");
      request.send(payload);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.responseText)
        }
      }
    }).then(response => dispatch(finishedRequest(JSON.parse(response))))
  }
}