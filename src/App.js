import logo from './logo.svg';
import './App.css';
import Nabvar from './Nabvar';
import Carosal1 from './Carosal1';

function App() {
  return (
    <div>
      <Nabvar/>
      <div className='app-carosal'><Carosal1/></div>
    </div>
  );
}

export default App;
