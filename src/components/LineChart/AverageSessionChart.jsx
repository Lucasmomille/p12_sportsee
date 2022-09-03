import React from 'react';
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Rectangle, ResponsiveContainer } from 'recharts';
import './averageChart.scss'
import { getMockData } from '../../helpers/getDatas'
import { UserAverageSession } from '../../models/UserAverageSession'
import { useApi } from '../../services/apiService'

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

	const { data, isLoaded } = useApi(
		`http://localhost:3000/user/${props.id}/average-sessions`
	)
	let user
	const userAverageSessionData = getMockData('AverageSession')

	if (isLoaded && process.env.NODE_ENV === ('development' || 'production')) {
		user = data.data
	} else {
		user = userAverageSessionData
	}

	const userAverageSession = new UserAverageSession(user).getAverageSessions()
    return (
		<>
        {isLoaded? <div className='average'>
            <ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={userAverageSession}
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
						fill="#FFFFFF"
					>
						<tspan fontSize="15">Durée moyenne des sessions</tspan>
					</text>
					<CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
					<XAxis dataKey="day" axisLine={false} tickLine={false}/>
					<Tooltip cursor={<CustomCursor/>} content={<CustomTooltip />}/>
					<Line type="monotone" unit="min" dot={false} dataKey='sessionLength' stroke="#FFFFFF" />
				</LineChart>
			</ResponsiveContainer>
        </div> : <div></div>}
		</>
    )
}

AverageSessionChart.propTypes = {
	id: PropTypes.number.isRequired,
}
