import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { getMockData } from '../../helpers/getDatas'
import { UserPerformance } from '../../models/UserPerfomance'
import { useApi } from '../../services/apiService'
import './performancechart.scss'

/**
 * Generate component with user's performance.
 * @component
 * @param { * } props
 * @return { HTMLElement }
 */
export default function PerformanceChart(props) {

    const { data, isLoaded, error } = useApi(
		`http://localhost:3000/user/${props.id}/performance`
	)
    if (isLoaded) {
		console.log("data perf", data.data)
	}
    useEffect(() => {
		const performanceSvg = document.getElementsByClassName("recharts-surface")[4]
        performanceSvg.setAttribute("viewBox", "-30 0 370 300")

	}, [])
    const userPerformanceData = getMockData('Performance')
	const userPerformance = new UserPerformance(userPerformanceData).getPerformance()
    return (
        <div className="performance">
            <RadarChart 
                cx="50%"
                cy="50%" 
                width={300}
                height={300} 
                outerRadius="80%" 
                data={userPerformance}
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
    id: PropTypes.number.isRequired,
}
