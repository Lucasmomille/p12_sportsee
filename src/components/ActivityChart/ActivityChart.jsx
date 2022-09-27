import React from 'react'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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
          <p className="label">{`${payload[0].payload.kilogram} kg`}</p>
          <p className="label">{`${payload[0].payload.calories} kCal`}</p>
        </div>
      );
    }
  
    return null;
  };

/**
 * Generate component with user's activity.
 * @component
 * @param { * } props
 * @return { HTMLElement }
 */
export default function ActivityChart(props) {
    return (
        <div className='activity'>
            <ResponsiveContainer width="100%" height={380}>
            <BarChart
                data={props.activity}
                margin={{
                    top: 112,
                    right: 30,
                    left: 20,
                    bottom: 10,
                }}
                barSize={7}
                barGap={8}
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
            </ResponsiveContainer>
        </div>
    )
}

ActivityChart.propTypes = {
    activity: PropTypes.array.isRequired,
}

ActivityChart.defaultProps =  [
    {
        day: '01',
        kilogram: '100',
        calories: '200',
    }
]