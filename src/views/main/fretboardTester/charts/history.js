import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'Recharts';
import React from 'react';
import _ from 'lodash';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class SimpleLineChart extends React.Component {

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {

        const data = _.map(this.props.data.toJS(), function(test,i){
            return { name:i.toString(), correct:test.correct.length };
        });

        while (data.length < 10) {
            data.push({ name:data.length });
        }

        return (
            <ResponsiveContainer>
            <LineChart data={data}>
                <YAxis label="# Correct" domain={[0, 'dataMax + 10']} />
                <XAxis label="Rounds" dataKey="name" />
                <CartesianGrid strokeDasharray="3 3"  />
                <Line type="monotone" dataKey="correct"  stroke="orange" />

            </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default SimpleLineChart;
