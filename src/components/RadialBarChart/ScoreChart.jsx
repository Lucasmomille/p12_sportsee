import React from 'react'
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar } from 'recharts';
import './scorechart.scss';

export default function ScoreChart(props) {
    return (
        <div className="score">
			<RadialBarChart width={300} height={300} innerRadius="50%" outerRadius="80%" data={props.score}>
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
