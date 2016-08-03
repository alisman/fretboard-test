import React from 'react';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Immutable from 'immutable';
import buildChallenge from '../../../redux/lib/buildChallenge';

import FretboardTester from './fretboardTester';

describe('<FretboardTester />', () => {
    let wrapper, getStoreStateStub;

    beforeEach(() => {

        //dispatchStub = sinon.stub(TestDuration.prototype,'dispatch');

        getStoreStateStub = sinon.stub(FretboardTester.prototype,'getStoreState',()=>{
             return Immutable.fromJS({
                 noteSelection: { currentChallenge: buildChallenge() }
             });
        });

        wrapper = shallow(<FretboardTester  />);

    });
    //
    it("Dispatch is called with appropriate action (and confirmed=false) on select change event",()=>{
         console.log(wrapper.find(".modal-body").get(0));
        //wrapper = shallow(<TestDuration  />);
        //wrapper.find('select').simulate('change', {target: { selectedOptions:[{ value:20 }] } });
        //assert.isTrue(dispatchStub.calledOnce);
        //assert.equal(dispatchStub.args[0][0].type, "CHANGE_TEST_DURATION");
        //assert.equal(dispatchStub.args[0][0].confirmed, false);
        //assert.equal(dispatchStub.args[0][0].newDuration, 20);

    });

    afterEach(() => {

        //dispatchStub.restore();

    });

});
