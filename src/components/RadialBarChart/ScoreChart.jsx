import React from 'react'
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar } from 'recharts';
import './scorechart.scss';

export default function ScoreChart(props) {
    console.log('score in child', props.score[1].percent)
    return (
        <div className="score">
			<RadialBarChart width={500} height={500} innerRadius="10%" outerRadius="80%" data={props.score}>
				<RadialBar
					minAngle={15}
					dataKey="percent"
					clockWise
				/>
				<text
              className="score__title"
              x="10%"
              y={33}
              fill="#282D30"
            >
              <tspan fontSize="15">Score</tspan>
            </text>
			<text
              className="custom-rechart-title"
              x="50%"
              y="38%"
              fill="#282D30"
              textAnchor="middle"
              dominantBaseline="central"
            >
				<tspan>{props.percentage}%</tspan>
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
