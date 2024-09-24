import "./NewProduct.css";
import { useNavigate } from "react-router-dom";





const NewProduct=()=>{
    const navigate = useNavigate()
    const handleViewMore=()=>{
navigate("./demo5")
    }

    
    return (
        <div className="new-1">
        <div>
            <h2>New product</h2>
            <p>Special</p>
        </div>
        <div className="new-2"><p onClick={handleViewMore}>View More</p></div>
        </div>
    )
}
export default NewProduct;