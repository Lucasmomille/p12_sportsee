import React from 'react'
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import './scorechart.scss';

export default function ScoreChart(score) {
    console.log('score in child', score)
    return (
        <div className="score">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" width={500} height={500} innerRadius="10%" outerRadius="80%" barSize={10} data={score.score}>
                <RadialBar
                    minAngle={15}
                    dataKey="percent"
                />
                </RadialBarChart>
		    </ResponsiveContainer>

        </div>
    )
}

ScoreChart.propTypes = {
    score: PropTypes.array.isRequired,
}
  
ScoreChart.defaultProps = {
    score: [
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
}

/* 
<ResponsiveContainer width="100%" height={260}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="80%"
            barSize={10}
            data={getData(user, 'ScoreData')}
          >
            <text
              className="custom-rechart-title"
              x="10%"
              y={33}
              fill="#282D30"
              textAnchor="middle"
              dominantBaseline="central"
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
              <tspan fontSize="26">{getData(user, 'ScorePercentage')}%</tspan>
            </text>

            <text
              className="custom-rechart-title"
              x="50%"
              y="50%"
              fill="#848484"
              textAnchor="middle"
              dominantBaseline="central"
            >
              <tspan fontSize="16">de votre</tspan>
            </text>

            <text
              className="custom-rechart-title"
              x="50%"
              y="60%"
              fill="#848484"
              textAnchor="middle"
              dominantBaseline="central"
            >
              <tspan fontSize="16">objectif</tspan>
            </text>
            <RadialBar
              label="false"
              startAngle={180}
              endAngle={0}
              background
              dataKey="percent"
            />
          </RadialBarChart>
        </ResponsiveContainer> */