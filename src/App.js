import './assets/scss/main.scss'
import Navbar from './components/Navbar/NavBar'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SideBar></SideBar>
      <main className='dashboard'>

      </main>
    </div>
  );
}

export default App;
