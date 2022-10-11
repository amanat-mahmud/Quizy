import React, { useContext } from 'react';
import { TopicsContext } from '../layout/Main';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Statistics = () => {
    const topics = useContext(TopicsContext);
    // console.log(topics);

    return (
        <div className='mt-5'>
            {/* <LineChart width={600} height={300} data={topics}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
            </LineChart> */}
            <LineChart width={600} height={300} data={topics} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total"/>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;