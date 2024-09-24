import Carosal1 from './Carosal1';
import Card1Carosal from './Card1Carosal';
// import Login from './Login';
import NewProduct from './NewProduct';
import Card2 from './Card2';
// import Card3 from './Card3';
import Download from './Download';
import DropFilter from './DropFilter';
// import Demo5 from "./Demo5";





const Home=()=>{
    return (
        <div>
      <Carosal1/>
      <div style={{marginTop:"75px"}}><Card1Carosal/></div>
      <NewProduct/>
      <Card2/>
      <Download/>
      {/* <Card3/> */}
      {/* <DropFilter/> */}
      {/* <Demo5/> */}
        </div>
    )
}
export default Home;