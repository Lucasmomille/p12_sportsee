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
import { useApi } from './services/apiService'


function App() {
	const { data, isLoaded, error } = useApi(
		`http://localhost:3000/user/18`
	)
	const userMainData = getMockData('MainData')
	let result = [];
	let promises = [useApi(`http://localhost:3000/user/18`), useApi(`http://localhost:3000/user/18/performance`)]

	const promiseAll = Promise.all(promises)
		.then(responses => responses.forEach(
			(response) => {result.push(response)}
		))
		.then(console.log('res', result));
	/* promiseAll.forEach(({ data }) => {
		result = [...result, data];
	}); */
	console.log('result', promiseAll)
	console.log('process.env.NODE_ENV', process.env.NODE_ENV)
	let user;

	// use mocked data only if in test mode
	if (isLoaded && process.env.NODE_ENV !== 'test') {
		user = data.data
	} else {
		user = userMainData
	}
	
	const userInfo = new UserInfos(user)

	const scoreChart = userInfo.getScore()
	const percentage = userInfo.getScorePercentage()

	const userFirstname = userInfo.getFirstName()
	const userEnergy = userInfo.getEnergyInfos()

  return (
	<>
		<Navbar></Navbar>
		{isLoaded ? <div className="dashboard">
			
			<SideBar></SideBar>
			<main className='main'>
			<div className='hello'>
				<p className='hello__title'>Bonjour <span className='--color-primary'>{userFirstname}</span></p>
				<p className="hello__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
				<div className="container">
					<div className='charts'>
						<ActivityChart id={userInfo.id}></ActivityChart>
						<div className='charts__container'>
							<AverageSessionChart id={userInfo.id}></AverageSessionChart>
							<PerformanceChart id={userInfo.id}></PerformanceChart>
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
			isLoading
		</div>}
	</>
  );
}

export default App;
