import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import React from 'react';
import { actionCreators } from 'reducers/fretboard';

class TestDuration extends React.Component {

    changeDuration(e){

        //alert(e.target.selectedOptions[0].value);

        this.dispatch(actionCreators.changeTestDuration(e.target.selectedOptions[0].value, false));

    }

    dispatch() {

        this.context.store.dispatch.apply(this,arguments);

    }

    render(){

        return(
            <select onChange={ this.changeDuration.bind(this) }>
                  <option value="20">20</option>
                      <option value="30">30</option>
                </select>
        );

    }

}

// grant access to the store via context
TestDuration.contextTypes = {
    store: React.PropTypes.object.isRequired
};


export default TestDuration;