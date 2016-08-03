import React from 'react';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import TestDuration from './testDuration';

describe.only('<TestDuration />', () => {
    let wrapper, dispatchStub;

    beforeEach(() => {

        dispatchStub = sinon.stub(TestDuration.prototype,'dispatch');

        wrapper = shallow(<TestDuration  />);

    });

    it("Dispatch is called with appropriate action (and confirmed=false) on select change event",()=>{

        wrapper = shallow(<TestDuration  />);
        wrapper.find('select').simulate('change', {target: { selectedOptions:[{ value:20 }] } });
        assert.isTrue(dispatchStub.calledOnce);
        assert.equal(dispatchStub.args[0][0].type, "CHANGE_TEST_DURATION");
        assert.equal(dispatchStub.args[0][0].confirmed, false);
        assert.equal(dispatchStub.args[0][0].newDuration, 20);

    });

    afterEach(() => {

        dispatchStub.restore();

    });

});
