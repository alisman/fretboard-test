import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import React from 'react';
import { actionCreators } from 'reducers/fretboard';

class TestDuration extends React.Component {

    render(){

        return(
            <form>
            <FormGroup controlId="formValidationSuccess2" validationState="success">
                <ControlLabel>Test Duration</ControlLabel>
                <FormControl type="text" />
                <FormControl.Feedback />
            </FormGroup>
            </form>
        );

    }

}

// grant access to the store via context
TestDuration.contextTypes = {
    store: React.PropTypes.object.isRequired
};


export default TestDuration;