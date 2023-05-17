
import './App.css';
import Contain from './components/Contain';
import Footer from './components/Footer';
import Data from './components/Data';
import DropMenu from './components/DropMenu';
import About from './components/About';
import Aboutt from './components/Aboutt';
import Search  from './components/Search';
import Details from './components/Details';
import Home from './components/Home';

import Mapp from './components/Mapp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Reservation from './components/Reservation';
//import fetchData from './components/Axios';

<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>

function App() {
  
  //fetchData()
  //console.log({globalData})
  
  return (
    <BrowserRouter>
      <div className='app'>
       
      <DropMenu/>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Restaurants' element={<Search/>} />
          
          <Route path='/AboutUs' element={<Aboutt/>} />
          <Route path="/Details/:name" element={<Details/>} />

          <Route path="/Map" element={<Mapp/>} />
          <Route path="/Reserve/:restaurantId" element={<Reservation/>} />
        </Routes>
     
        
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
