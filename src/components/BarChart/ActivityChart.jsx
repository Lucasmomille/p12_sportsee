import React from 'react'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { getMockData } from '../../helpers/getDatas'
import { UserActivity } from '../../models/UserActivity'
import { useApi } from '../../services/apiService'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.kilogram} kg`}</p>
          <p className="label">{`${payload[0].payload.calories} kCal`}</p>
        </div>
      );
    }
  
    return null;
  };
export default function ActivityChart(props) {

    const { data, isLoaded, error } = useApi(
		`http://localhost:3000/user/${props.id}/activity`
	)
    
    const userActivityData = getMockData('Activity')
	const userActivity = new UserActivity(userActivityData)
	const userActivitySession = userActivity.getSessions()
    return (
        <div className='activity'>
            <BarChart
                data={userActivitySession}
                margin={{
                    top: 112,
                    right: 30,
                    left: 20,
                    bottom: 10,
                }}
                barSize={7}
                barGap={8}
                width={1000}
                height={400}
            >                    
                <text
                    className=""
                    x={30}
                    y={120}
                    fill="#000000"
                    textAnchor="left"
                    dominantBaseline="central"
                >
                    <tspan fontSize="20">Activité quotidienne</tspan>
                </text>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis axisLine={false} tickLine={false} dataKey="day" />
                <YAxis axisLine={false} tickLine={false} orientation="right" />
                <Tooltip content={<CustomTooltip/>} />
                <Legend verticalAlign="top" align="right" height={40} />
                <Bar
                    unit="kg"
                    dataKey="kilogram"
                    fill="#000000"
                    legendType="circle"
                    radius={[10, 10, 0, 0]}
                    name="Poids (kg)"
                />
                <Bar
                    unit="Kcal"
                    dataKey="calories"
                    fill="#FF0000"
                    legendType="circle"
                    radius={[10, 10, 0, 0]}
                    name="Calories brûlées (kCal)"
                />
            </BarChart>
        </div>
    )
}

ActivityChart.propTypes = {
    id: PropTypes.number.isRequired,
}
