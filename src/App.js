import logo from './logo.svg';
import Card3 from './Card3';
import './App.css';
// import Nabvar from './Nabvar';
// import Carosal1 from './Carosal1';
// import Card1Carosal from './Card1Carosal';
// import Login from './Login';
import Home from './Home';
import Nabvar from './Nabvar';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Catogery from './Catogery';






function App() {
  return (
    <div>
      <Nabvar/>
      {/* <Home/> */}
      {/* <Catogery/> */}
      <Routes>
        <Route path='/card3' element={<Card3/>}/>
        <Route path='/catogery' element={<Catogery/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
