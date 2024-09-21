import "./Card3.css";
import { FaStar } from "react-icons/fa";





const Card3=({item2})=>{
    console.log(item2)
    return (
        <div className="card3-1">
<img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Nanma_White_Rice_Flakes_Pouch.jpg"></img>
          <div className="card3-2">
            <div className="card3-10">
            <h3>poha</h3>
            <p>1 kg poha market</p>
            <hr></hr>
            <span className="card3-star"><FaStar /></span>
            <span  className="card3-star"><FaStar /></span>
            <span  className="card3-star"><FaStar /></span>
            <span  className="card3-star"><FaStar /></span>
            <span  className="card3-star"><FaStar /></span>
            <span>(0 Review)</span>
            <h5>Rs 2342</h5>
            <strike>Rs 565</strike>
            <div className="card3-4"><input placeholder="ZipCode"></input><button>Check Aligbalty</button></div>
            <div className="card3-5"><button>-</button>787<button>+</button></div>
            <div className="card3-6"><button className="card3-btn1">Add to Cart</button><button className="card3-btn2">Add to Favorite</button></div>
            <p>Seler <strike>Raj Babbar</strike></p>
            </div>
            </div> 
        </div>
    )
}
export default Card3;