
import './App.css';
import Contain from './components/Contain';
import Footer from './components/Footer';
import Data from './components/Data';
import DropMenu from './components/DropMenu';
import About from './components/About';
import Search  from './components/Search';
import Details from './components/Details';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
      <DropMenu/>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Restaurants' element={<Search/>} />
          
          <Route path='/AboutUs' element={<About/>} />
          <Route path="/Details" element={<Details/>} />
        </Routes>
     
        
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
