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
		<div class="dashboard">
			
			<SideBar></SideBar>
			<main className='main'>
				<p>Bonjour {userFirstname}</p>
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
