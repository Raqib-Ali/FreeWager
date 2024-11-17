import './App.css';
import { Header } from './Components/Header';
import { Home } from './Pages/Home';
import { Ads } from './Pages/Ads'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Ad } from './Pages/Ad';

function App() {
  return (
    <div className="">

      <BrowserRouter >
      <Header/>
      <div className='p-3'>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/ads/category' element={<Ads/>} />
        <Route path='/ad/id' element={<Ad/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
