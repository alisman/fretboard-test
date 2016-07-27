import React from 'react';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import buildFretboard from 'redux/lib/buildFretboard';
import sinon from 'sinon';

import String from './string';

describe('<String />', () => {
    let wrapper, fretboard;

    beforeEach(() => {
        fretboard = buildFretboard();
    });

    it("if active prop is true, the tablerow gets active-string class, otherwise, not",()=>{
        wrapper = shallow(<String stringData={ fretboard.get(0) } active={false}  />);
        assert.isFalse(wrapper.hasClass("active-string"));

        wrapper = shallow(<String stringData={ fretboard.get(0) } active={true}  />);
        assert.isTrue(wrapper.hasClass("active-string"));

    });

    it("returns a table row for each note element in string notes list",()=>{
        wrapper = shallow(<String stringData={ fretboard.get(0) } active={false}  />);
        assert.equal(wrapper.find('td').length,13);
    });

    it('clicking a note on active string fires onNoteClick handler', () => {
        const onButtonClick = sinon.spy();
        const wrapper = mount(
            <String active={true} stringData={ fretboard.get(0) } onNoteClick={onButtonClick} />
        );
        wrapper.find('.note').first().simulate('click');

        console.log(onButtonClick.calledOnce);
    });

    it('clicking a note on inactive string doesn\'t fire onNoteClick handler' , () => {
        const onButtonClick = sinon.spy();
        const wrapper = mount(
            <String active={false} stringData={ fretboard.get(0) } onNoteClick={onButtonClick} />
        );
        wrapper.find('.note').first().simulate('click');

        assert.equal(onButtonClick.callCount,0);
    });

})
