import React from "react";
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

export default function PerformanceChart(props) {
    return (
        <div className="performance">
            <RadarChart 
                cx="50%"
                cy="50%" 
                width={400}
                height={400} 
                outerRadius="80%" 
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
        </div>
    )
}

PerformanceChart.propTypes = {
    performance: PropTypes.array.isRequired,
}
  
PerformanceChart.defaultProps =  [
    {
        day: '01',
        kilogram: '100',
        calories: '200',
    }
]