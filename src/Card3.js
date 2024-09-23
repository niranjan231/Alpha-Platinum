import { useState } from "react";
import "./Card3.css";
import { FaStar } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";





const Card3=({detale,BackHome})=>{
    const [count , setCount] = useState(1);
 const decresBtn=()=>{
    setCount(count-1)
 }
    const incrsBtn=()=>{
        setCount(count+1);
    }
    // const BackHome=()=>{
        
    // }
    return (
        <>
        <div className="show-Modal-body"></div>
        {
            detale.map((result=>{
                return  <div className="card3-1">
                     <h1 className="span-clas">Home</h1>
                <img src={result.image}></img>
                          <div className="card3-2">
                            <div className="card3-10">
                            <h3>{result.title}</h3>
                            <p>1 kg poha market</p>
                            <hr></hr>
                            <span className="card3-star"><FaStar /></span>
                            <span  className="card3-star"><FaStar /></span>
                            <span  className="card3-star"><FaStar /></span>
                            <span  className="card3-star"><FaStar /></span>
                            <span  className="card3-star"><FaStar /></span>
                            <span>(0 Review)</span>
                            <h5>Rs {result.price}</h5>
                            <strike>Rs 565</strike>
                            <div className="card3-4"><input placeholder="ZipCode" required></input> <button>Check Aligbalty</button></div>
                            <div className="card3-5"><button onClick={decresBtn}>-</button>787<button onClick={incrsBtn}>+</button></div>
                            <div className="card3-6"><button className="card3-btn1">Add to Cart</button><button className="card3-btn2">Add to Favorite</button></div>
                            <p>Seler <strike>Raj Babbar</strike></p>
                            </div>
                            </div> 
                           <h2 className="modal-h2" onClick={BackHome}><RxCross1 /></h2>
                        </div>
            }))
        }
        </>
    )
}
export default Card3;