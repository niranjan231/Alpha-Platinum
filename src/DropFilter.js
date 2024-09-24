import "./DropFilter.css";
import data2 from "./data2";





const DropFilter=()=>{ 


    




    return (
        <>
            <div class="dropdown">
  <button className="drop-1" class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Clothing</a></li>
    <li><a class="dropdown-item" href="#">Electronics</a></li>
    <li><a class="dropdown-item" href="#">Home Kitchen</a></li>
  </ul>
</div>
<div className="drop-4">
{
    data2.map((item5)=>{
        return <div className="drop-2" key={item5.id}>
        <span className="drop-3">0% OFF</span>
        <img src={item5.image}></img>
        <h4>Name</h4>
        <span><span>Price{item5.category}</span></span>
        <p><strike>{item5.price}</strike></p>
        <button>Add to Cart</button>
    </div>
    })
}
</div>

</>
    )
}
export default DropFilter;