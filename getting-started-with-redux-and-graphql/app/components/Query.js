import React from 'react';
import { connect } from 'react-redux';
import { getGraph } from '../actions/actions.js';// Where state changes occur : Components

let Query = React.createClass({
  //Create initial query to load data when component mounts
  componentDidMount() {
    this.props.dispatch(getGraph("{goldberg(id: 2) {id, character, actor, role, traits}}"));
  },
  render() {
    let dispatch = this.props.dispatch;
    let fetchInProgress = String(this.props.store.get('fetching'));
    let queryText;
    //This is result from populating Immutable.Map change from reducers
    //Convert stored data to object
    let goldberg = this.props.store.get('data').toObject();
    return (
      <div>
        <p>Fetch in progress: {fetchInProgress}</p>
        <h3>{ goldberg.character }</h3>
        <p>{ goldberg.actor }</p>
        <p>{ goldberg.role }</p>
        <p>{ goldberg.traits }</p>
        <input ref={node => {queryText = node}}></input>
        <button onClick={() => {dispatch(getGraph(queryText.value))}}>
          query
        </button>
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    store: state
  }
};

export const QueryContainer = connect(
  mapStateToProps
)(Query);