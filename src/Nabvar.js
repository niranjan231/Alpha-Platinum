import "./Nabvar.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";







const Nabvar=()=>{
    return (
        <>
       <div className="nav-1">
     <div className="nav-2">
        <div className="nav-8">
        <div><img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/newlogo22.png"></img></div>
        <div className="nav-3-inp"><input type="text" placeholder="search for product"></input><span><CiSearch /></span></div>
        </div>

<div className="nav-7">
        <div><button className="nav-4-btn">Login</button></div>
        <sapn className="nav-5-span"><CiHeart /></sapn>
        <span className="nav-6-span"><FaCartPlus /></span>
        </div>
     </div>
       </div>

       <div className="nav-10">
<span><TiThMenu />SEE ALL</span>
<span>|</span>
<span>Clothing</span>
<span>Eloctronic</span>
<span>Home Kitchen</span>
<span>Beauty and persnoal care</span>
<span>Toy & Game</span>
<span>Clothing</span>
<span>Grocry & Gurment Food</span>
       </div>
       </>
    )
}
export default Nabvar