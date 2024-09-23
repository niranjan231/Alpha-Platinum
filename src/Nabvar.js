import { useState } from "react";
import "./Nabvar.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import Login from "./Login";
import data from "./data";
import { useNavigate } from "react-router-dom";









const Nabvar=()=>{
    const [login , setLogin] = useState(false)
    const [catgry , setCatgry] = useState(data)
    const [show2 , setShow2] = useState(false);
    const navigate = useNavigate()
    const BackHomeFormLogo=()=>{
        navigate("/")
        setShow2(false)
    }
    const outLoginPage=()=>{
        setLogin(false)
    }
    const handlePanel=()=>{
        setCatgry(data)
        setShow2(true);

    }
    const UpdateItem=(carditem)=>{
const filterCatogery = data.filter((curdItem)=>{
    return curdItem.text === carditem
})
setCatgry(filterCatogery)
    }
    const handleLoginBtn=()=>{
        setLogin(true);
    }
    return (
        <>
       <div className="nav-1">
     <div className="nav-2">
        <div className="nav-8">
        <div onClick={BackHomeFormLogo}><img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/newlogo22.png"></img></div>
        <div className="nav-3-inp"><input type="text" placeholder="search for product"></input><span><CiSearch /></span></div>
        </div>

<div className="nav-7">
        <div><button onClick={handleLoginBtn} className="nav-4-btn">Login</button></div>
        <sapn className="nav-5-span"><CiHeart /></sapn>
        <span className="nav-6-span"><FaCartPlus /></span>
        </div>
     </div>
       </div>

       <div className="nav-10">
<span  onClick={handlePanel}><TiThMenu />SEE ALL</span>
<span>|</span>
<span  onClick={()=>UpdateItem("Clothing")}>Clothing</span>
<span onClick={()=>UpdateItem("Electronics")}>Eloctronic</span>
<span onClick={()=>UpdateItem("Home & Kitchen")}>Home Kitchen</span>
<span onClick={()=>UpdateItem("Beauty & Personal Care")}>Beauty and persnoal care</span>
<span onClick={()=>UpdateItem("Toys & Games")}>Toy & Game</span>
<span onClick={()=>UpdateItem("Grocery & Gourmet Food")}>Grocry & Gurment Food</span>
<span onClick={()=>UpdateItem("Books")}>Book</span>
       </div>
       {/* {
        login && <Login outLoginPage={outLoginPage}/>
       } */}


      {
        show2 &&  <div className="cat-1">
        {
           catgry.map((item4)=>{
               return  <div className="cat-2"><img src={item4.image}></img><p>{item4.text}</p></div>
           })
        }
       </div>
      }





       {
        login && <Login outLoginPage={outLoginPage}/>
       }
       </>
    )
}
export default Nabvar