import React from 'react'
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import './scorechart.scss';

/**
 * Generate component with user's score.
 * @component
 * @param { * } props
 * @return { HTMLElement }
 */
export default function ScoreChart(props) {
    return (
        <div className="score">
            <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart innerRadius="50%" outerRadius="80%" data={props.score}>
                    <RadialBar
                        minAngle={15}
                        dataKey="percent"
                        clockWise
                    />
                    <text
                        className="score__title"
                        x="10%"
                        y={50}
                        fill="#000000"
                    >
                        <tspan fontSize="25">Score</tspan>
                    </text>
                    <text
                        className="custom-rechart-title"
                        x="50%"
                        y="45%"
                        fill="#000000"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={25}
                    >
                        <tspan className='score__percentage'>{props.percentage}%</tspan>
                    </text>
                    <text
                        className="custom-rechart-title"
                        x="50%"
                        y="55%"
                        fill="#000000"
                        fillOpacity={0.6}
                        textAnchor="middle"
                        fontSize={15}
                        dominantBaseline="central"
                    >
                        <tspan>de votre objectif</tspan>
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

ScoreChart.propTypes = {
    score: PropTypes.array.isRequired,
}
  
ScoreChart.defaultProps =  [
    {
        name: 'falseScore',
        percent: 100,
        fill: '#f8f7f7',
    },
    {
        name: 'score',
        percent: 50,
        fill: '#FF0000',
    },
]
