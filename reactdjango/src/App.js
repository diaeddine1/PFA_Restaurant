
import './App.css';
import Contain from './components/Contain';
import Footer from './components/Footer';
import Data from './components/Data';
import DropMenu from './components/DropMenu';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
    
        <DropMenu/>
        <Routes>
          <Route path='/' element={<Data/>} />
          <Route path='/AboutUs' element={<About/>} />
        </Routes>
     
        
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
