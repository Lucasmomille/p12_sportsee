import React from 'react'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const CustomTooltip = ({ active, payload }) => {
    console.log('payload', payload)
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
    return (
        <div>
            <BarChart
                data={props.sessions}
                margin={{
                    top: 112,
                    right: 30,
                    left: 20,
                    bottom: 10,
                }}
                barSize={7}
                barGap={8}
                width={1200}
                height={400}
            >                    
                <text
                    className=""
                    x={30}
                    y={33}
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
    sessions: PropTypes.array.isRequired,
}
  
ActivityChart.defaultProps =  [
    {
        day: '01',
        kilogram: '100',
        calories: '200',
    }
]