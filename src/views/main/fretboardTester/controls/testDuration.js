import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import React from 'react';
import { actionCreators } from 'reducers/fretboard';

class TestDuration extends React.Component {

    changeDuration(e){

        //alert(e.target.selectedOptions[0].value);

        this.dispatch(actionCreators.changeTestDuration(parseInt(e.target.selectedOptions[0].value,10), false));

    }

    dispatch() {

        this.context.store.dispatch.apply(this,arguments);

    }

    getStoreState() {

        return this.context.store.getState();

    }

    makeOption(value, selectedValue){
        return <option value={value}>{value}</option>
    }

    render(){

        //let state = this.getStoreState();
        let selectedValue = this.props.testDuration;

        return(

            <select className="select-testDuration" value={selectedValue} onChange={ this.changeDuration.bind(this) }>
                { this.makeOption(10, selectedValue) }
                { this.makeOption(20, selectedValue) }
                { this.makeOption(30, selectedValue) }
                { this.makeOption(40, selectedValue) }
                { this.makeOption(60, selectedValue) }
            </select>
        );

    }

}

// grant access to the store via context
TestDuration.contextTypes = {
    store: React.PropTypes.object.isRequired
};


export default TestDuration;