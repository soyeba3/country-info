import {Routes, Route } from 'react-router-dom';
import './App.css';
import CountryDetail from './component/CountryDetail/CountryDetail';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:countryName' element={<CountryDetail /> }/>
      <Route exact path='/' element={<Home />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    
      
  );
}

export default App;
