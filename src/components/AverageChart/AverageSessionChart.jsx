import React from 'react';
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle, ResponsiveContainer } from 'recharts';
import './averageChart.scss'

  /**
 * Function to generation a custom cursor for recharts.
 * @function
 * @param { * } props
 * @return { HTMLElement }
 */
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
// add domain with yAxis, hide={true}
  /**
 * Function to generation a custom tooltip for recharts.
 * @function
 * @param { * } active
 * @param { * } payload
 * @return { HTMLElement }
 */
const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
		<div className="custom-tooltip">
			<p className="label">{`${payload[0].payload.sessionLength} min`}</p>
		</div>
		)
	}
  
    return null;
  };

/**
 * Generate component with user's average session.
 * @component
 * @param { * } props
 * @return { HTMLElement }
 */
export default function AverageSessionChart(props) {
	const arraySessionLength = props.sessions.map(session => session.sessionLength)
	const yAxisValue = Math.max(...arraySessionLength) * 1.5;
    return (
		<div className='average'>
            <ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={props.sessions}
					margin={{
						top: 0,
						right: 20,
						left: 20,
						bottom: 0,
					}}
				>
					<text
						className="score__title"
						x="10%"
						y={50}
						fill="#FFFFFF"
					>
						<tspan fontSize="15">Durée moyenne des sessions</tspan>
					</text>
					<CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
					<XAxis dataKey="day" axisLine={false} tickLine={false}/>
					<YAxis hide={true} type="number" domain={[0, yAxisValue]}></YAxis>
					<Tooltip cursor={<CustomCursor/>} content={<CustomTooltip />}/>
					<Line type="monotone" unit="min" dot={false} dataKey='sessionLength' stroke="#FFFFFF" />
				</LineChart>
			</ResponsiveContainer>
        </div>
    )
}

AverageSessionChart.propTypes = {
	sessions: PropTypes.array.isRequired,
}

AverageSessionChart.defaultProps =  [
    {
        day: 'L',
        sessionLength: 30,
    }
]