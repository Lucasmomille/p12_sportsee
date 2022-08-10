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
	const score = userInfo.getScore()
	console.log('userInfo', userInfo.getScore())

  return (
	<div className="App">
		<Navbar></Navbar>
		<SideBar></SideBar>
		<main className='dashboard'>
		<ScoreChart score={score}></ScoreChart>
		</main>
	</div>
  );
}

export default App;
