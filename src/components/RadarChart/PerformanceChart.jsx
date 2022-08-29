import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import './performancechart.scss'

export default function PerformanceChart(props) {
    
    useEffect(() => {
		const performanceSvg = document.getElementsByClassName("recharts-surface")[4]
        performanceSvg.setAttribute("viewBox", "-30 0 370 300")

	}, [])
    
    return (
        <div className="performance">
            <RadarChart 
                cx="50%"
                cy="50%" 
                width={300}
                height={300} 
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