import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'Recharts';
import React from 'react';
import _ from 'lodash';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class ErrorBarChart extends React.Component {

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {

        let notes = {
            'C': 0,
            'C#': 0,
            'D': 0,
            'D#': 0,
            'E': 0,
            'F': 0,
            'F#':0,
            'G': 0,
            'G#': 0,
            'A': 0,
            'A#': 0,
            'B': 0
        };

        _.each(this.props.data.toJS(), function (report) {

            _.each(report.error, (err)=> {
                notes[err.note] = notes[err.note] + 1;
            });

        });

        let arr = [];
        _.each(notes, function (item, key) {
            arr.push({name: key, c: item});
        });

        return (
            <ResponsiveContainer>
            <BarChart data={arr}>
                <XAxis dataKey='name'/>
                <YAxis domain={[0, 10]}   />
                <CartesianGrid strokeDasharray='3 3'/>
                <Bar dataKey='c' animationDuration={500} fill='#8884d8'/>
            </BarChart>
                </ResponsiveContainer>
        );
    }
}

export default ErrorBarChart;
