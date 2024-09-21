import "./Catogery.css";
import data from "./data";






const Catogery=()=>{
    return(
        <div className="cat-1">
         {
            data.map((item4)=>{
                return  <div className="cat-2"><img src={item4.image}></img></div>
            })
         }
        </div>
    )
}
export default Catogery;