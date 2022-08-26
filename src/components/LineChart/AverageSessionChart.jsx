import React from 'react';
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Rectangle } from 'recharts';


const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x, y } = points[0];
    return (
      <Rectangle
        fill="#FF0000"
        stroke="#FF0000"
        fillOpacity={0.6}
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.sessionLength} min`}</p>
        </div>
      );
    }
  
    return null;
  };
export default function AverageSessionChart(props) {
    return (
        <div>
            <LineChart
                width={400}
                height={400}
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
            }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false}/>
          <Tooltip cursor={<CustomCursor/>} content={<CustomTooltip />}/>
          <Line type="monotone" unit="min" dot={false} dataKey='sessionLength' stroke="#FFFFFF" />
        </LineChart>
        </div>
    )
}

AverageSessionChart.propTypes = {
    data: PropTypes.array.isRequired,
}
  
AverageSessionChart.defaultProps =  [
    {
        day: 'L',
        sessionLength: 30,
    }
]