import React from "react";
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './performancechart.scss'

/**
 * Generate component with user's performance.
 * @component
 * @param { * } props
 * @return { HTMLElement }
 */
export default function PerformanceChart(props) {
    
    return (
    <div className="performance">
        <ResponsiveContainer width="100%" height={300}>
        <RadarChart 
            cx="50%"
            cy="50%" 
            outerRadius="50%" 
            data={props.performance}
            fill="#000000"
            fillOpacity={0.6}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <Radar
                name="Performance"
                dataKey="value"
                stroke="#FF0000"
                fill="#FF0000" 
                fillOpacity={0.6} />
        </RadarChart>
        </ResponsiveContainer>
    </div>
    )
}

PerformanceChart.propTypes = {
    performance: PropTypes.array.isRequired,
}

PerformanceChart.defaultProps =  [
    { value: 200, kind: 1 },
    { value: 240, kind: 2 }
]