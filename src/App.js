import './assets/scss/main.scss'
import React from 'react'
import Navbar from './components/Navbar/NavBar'
import SideBar from './components/SideBar/SideBar'
import ScoreChart from './components/RadialBarChart/ScoreChart'
import ActivityChart from './components/BarChart/ActivityChart'
import PerformanceChart from './components/RadarChart/PerformanceChart'
import AverageSessionChart from './components/LineChart/AverageSessionChart'
import { getMockData } from './helpers/getDatas'
import { UserInfos } from './models/UserInfos'
import { UserActivity } from './models/UserActivity'
import { UserPerformance } from './models/UserPerfomance'
import { UserAverageSession } from './models/UserAverageSession'


function App() {
  	/* useEffect(() => {
		axios.get('/data/logements.json')
		.then(response => setData(response.data))
		.catch(e => console.log(e))

	}, []) */
	const userMainData = getMockData('MainData')
	const userInfo = new UserInfos(userMainData)
	console.log('userMainData', userMainData)

	const scoreChart = userInfo.getScore()
	const percentage = userInfo.getScorePercentage()
	const userFirstname = userInfo.getFirstName()
	
	const userActivityData = getMockData('Activity')
	const userActivity = new UserActivity(userActivityData)
	const userActivitySession = userActivity.getSessions()

	const userPerformanceData = getMockData('Performance')
	const userPerformance = new UserPerformance(userPerformanceData).getPerformance()

	const userAverageSessionData = getMockData('AverageSession')
	const userAverageSession = new UserAverageSession(userAverageSessionData).getAverageSessions()
	console.log('UserAverageSession', userAverageSession)

  return (
	<>
		<Navbar></Navbar>
		<div className="dashboard">
			
			<SideBar></SideBar>
			<main className='main'>
			<div className='hello'>
				<p className='hello__title'>Bonjour <span className='--color-primary'>{userFirstname}</span></p>
				<p className="hello__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
				<div className="container">
					<div className='charts'>
						<ActivityChart sessions={userActivitySession}></ActivityChart>
						<div className='charts__container'>
						<AverageSessionChart data={userAverageSession}></AverageSessionChart>
							<ScoreChart score={scoreChart} percentage={percentage}></ScoreChart>
							<PerformanceChart performance={userPerformance}></PerformanceChart>
						</div>
					</div>
					<div></div>
				</div>
				
			</main>

		</div>
	</>
  );
}

export default App;
