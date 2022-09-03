import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
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
    
    const { data, isLoaded } = useApi(
		`http://localhost:3000/user/${props.id}/performance`
	)
    
    const userPerformanceData = getMockData('Performance')
    let user;
    if (isLoaded && process.env.NODE_ENV === ('development' || 'production')) {
		user = data.data
	} else {
		user = userPerformanceData
	}
    const userPerformance = new UserPerformance(user).getPerformance()
    return (
        <>
        {isLoaded ? <div className="performance">
            <ResponsiveContainer width="100%" height={300}>
            <RadarChart 
                cx="50%"
                cy="50%" 
                outerRadius="50%" 
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
            </ResponsiveContainer>
        </div> : <div></div>}
        </>
    )
}

PerformanceChart.propTypes = {
    id: PropTypes.number.isRequired,
}
