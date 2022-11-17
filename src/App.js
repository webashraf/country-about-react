import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Details from './Components/Details/Details';
import No from './Components/NoFound/No';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/details/:CId' element={<Details/>} ></Route>
        <Route path='*' element= {<No /> } > </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
