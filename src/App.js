import './assets/scss/main.scss'
import React from 'react'
import Navbar from './components/Navbar/NavBar'
import SideBar from './components/SideBar/SideBar'
import ScoreChart from './components/RadialBarChart/ScoreChart'
import { getMockData } from './helpers/getDatas'
import { UserInfos } from './models/UserInfos'


function App() {
  	/* useEffect(() => {
		axios.get('/data/logements.json')
		.then(response => setData(response.data))
		.catch(e => console.log(e))

	}, []) */
	const data = getMockData('MainData')
	const userInfo = new UserInfos(data)
	console.log('data', data)

	const scoreChart = userInfo.getScore()
	const percentage = userInfo.getScorePercentage()
	const userFirstname = userInfo.getFirstName()
	console.log('userInfo', userInfo.getScorePercentage())

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
					<div>
						<div></div>
						<div></div>
					</div>
					<div></div>
				</div>
				<ScoreChart score={scoreChart} percentage={percentage}></ScoreChart>
			</main>

		</div>
	</>
  );
}

export default App;
