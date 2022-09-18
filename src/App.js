import './assets/scss/main.scss'
import React from 'react'
import Navbar from './components/Navbar/NavBar'
import SideBar from './components/SideBar/SideBar'
import ScoreChart from './components/RadialBarChart/ScoreChart'
import ActivityChart from './components/BarChart/ActivityChart'
import PerformanceChart from './components/RadarChart/PerformanceChart'
import AverageSessionChart from './components/LineChart/AverageSessionChart'
import EnergyCard from './components/EnergyCard/EnergyCard'
import { getMockData } from './helpers/getDatas'
import { UserInfos } from './models/UserInfos'
import { useApiPromise } from './services/api'
import { UserActivity } from './models/UserActivity'
import { UserPerformance } from './models/UserPerfomance'
import { UserAverageSession } from './models/UserAverageSession'

function App() {

	const { isLoadedApi, user, userPerformance, userActivity, userSessions, isError } = useApiPromise(18)
	const userMainData = getMockData('MainData')

	let userInit, performance, activity, sessions;

	// use mocked data only if in test mode
	if (isLoadedApi && process.env.NODE_ENV !== 'test') {
		userInit = user
		performance = new UserPerformance(userPerformance).getPerformance()
		activity = new UserActivity(userActivity).getSessions()
		sessions = new UserAverageSession(userSessions).getAverageSessions()

	} else {
		userInit = userMainData

		const userPerformanceMocked = getMockData('Performance')
		performance = new UserPerformance(userPerformanceMocked).getPerformance()

		const userActivityMocked = getMockData('Activity')
		activity = new UserActivity(userActivityMocked).getSessions()

		const userSessionMocked = getMockData('AverageSession')
		sessions = new UserAverageSession(userSessionMocked).getAverageSessions()
	}
	
	const userInfo = new UserInfos(userInit)

	const scoreChart = userInfo.getScore()
	const percentage = userInfo.getScorePercentage()

	const userFirstname = userInfo.getFirstName()
	const userEnergy = userInfo.getEnergyInfos()

	if(isError) {
		return (
			<div>Error 500</div>
		)
	}
  return (
	<>
		<Navbar></Navbar>
		{isLoadedApi ? <div className="dashboard">
			
			<SideBar></SideBar>
			<main className='main'>
			<div className='hello'>
				<p className='hello__title'>Bonjour <span className='--color-primary'>{userFirstname}</span></p>
				<p className="hello__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
				<div className="container">
					<div className='charts'>
						<ActivityChart activity={activity}></ActivityChart>
						<div className='charts__container'>
							<AverageSessionChart sessions={sessions}></AverageSessionChart>
							<PerformanceChart performance={performance}></PerformanceChart>
							<ScoreChart score={scoreChart} percentage={percentage}></ScoreChart>
						</div>
					</div>
					<div className='cards__container'>
					{userEnergy.map((energy, index) => (
						<EnergyCard
							key={index}
							data={energy}
						></EnergyCard>
						))}
					</div>
				</div>
				
			</main>

		</div> 
		: <div>
			En cours de chargement&hellip;
		</div>}
		{isError ?? <div>Error 500</div>}
	</>
  );
}

export default App;
