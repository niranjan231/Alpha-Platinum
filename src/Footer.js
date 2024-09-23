import "./Footer.css";
// import { Audio } from 'react-loader-spinner'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";



const Footer=()=>{
    return (
        <div className="foot-1">
           {/* <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> */}

<div className="foot-2">
    <img src="https://alphasilver.productsalphawizz.com/uploads/newlogo22.png"></img>
</div>

<div className="foot-3">
    {/* <h3>Get to Know us</h3> */}
<div className="foot-6"><a href="">Home</a><a href="">Product</a><a href="">Register</a><a href="">Seler</a></div>
<div className="foot-7"><a href="">Category</a><a href="">Login</a><a href="">About Us</a><a href="">Contect Us</a></div>
</div>

<div className="foot-4">
    <h4>Conect with Us</h4>
    <div className="foot-5">
    <a href="https://www.facebook.com/"><spam className="facebook-1">< FaFacebook /></spam></a>
        <a href="hthttps://x.com/"><spam className="twiter-1"><FaTwitter /></spam></a>
        <a href="https://www.instagram.com/"><spam className="linkdine-1"><FaLinkedin /></spam></a>
        <a href="https://www.facebook.com/"><spam className="youtube-1"><FaYoutube /></spam></a>
    </div>

</div>
</div>
    )
}
export default Footer;