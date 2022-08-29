import React from 'react';
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Rectangle } from 'recharts';
import './averageChart.scss'


const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x, y } = points[0];
    return (
      <Rectangle
        fill="#000000"
        fillOpacity={0.2}
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
        <div className='average'>
            <LineChart
                width={300}
                height={300}
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
            	}}
       		 >
				<text
                    className="score__title"
                    x="10%"
                    y={50}
                    fill="#000000"
					        fillOpacity={0.4}
                >
                    <tspan fontSize="15">Durée moyenne des sessions</tspan>
                </text>
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