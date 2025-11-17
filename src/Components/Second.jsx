import './Second.css'
import hero from '../assets/images/hero-image.png'
import './Button'
import Button from './Button'
const Second = () =>
{
    return (
       <div className="main">
        <div className="one">
           <div className="quate">
            <h1>YOUR FEET <br/> DESERVE <br/> THE BEST</h1><br/>
           </div>
           <div className="other">
            <p>Your feet work hard for you every day. They deserve the best <br/>care, comfort, and attention, and we’re committed to giving <br/>them exactly that.</p>
           </div>
           <Button/>
        </div>  
        <div className="two">
            <img src={hero} alt="" srcset="" />
        </div>
       </div>
    )
}
export default Second