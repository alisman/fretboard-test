import React from 'react';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Immutable from 'immutable';

import TestDuration from './testDuration';

describe('<TestDuration />', () => {
    let wrapper, dispatchStub, getStoreStateStub, store;

    beforeEach(() => {

        dispatchStub = sinon.stub(TestDuration.prototype,'dispatch');

        store = Immutable.fromJS({ noteSelection:{ testDuration:20 } });

        getStoreStateStub = sinon.stub(TestDuration.prototype, 'getStoreState', ()=>store)

        //wrapper = shallow(<TestDuration  />);

    });

    it("Dispatch is called with appropriate action (and confirmed=false) on select change event",()=>{

        wrapper = shallow(<TestDuration testDuration={20}  />);
        wrapper.find('select').simulate('change', {target: { selectedOptions:[{ value:20 }] } });
        assert.isTrue(dispatchStub.calledOnce);
        assert.equal(dispatchStub.args[0][0].type, "CHANGE_TEST_DURATION");
        assert.equal(dispatchStub.args[0][0].confirmed, false);
        assert.equal(dispatchStub.args[0][0].newDuration, 20);

    });

    afterEach(() => {
        getStoreStateStub.restore();
        dispatchStub.restore();

    });

});
