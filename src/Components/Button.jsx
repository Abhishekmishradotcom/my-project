import './Button.css'
import flip from '../assets/images/flipkart.png'
import ama from '../assets/images/amazon.png'
const Button = () =>
{
    const myarr=['Shop Now', 'Category']
    return(
        <div className="setpos">
            <button type="button" className='btn' style={{backgroundColor:'red',color:'#fff'}}>{myarr[0]}</button>
             <button type="button" className='btn'>{myarr[1]}</button>

            <h5>Also Available On</h5>
            <div className="img">
            <img src={flip} alt="Flipkart logo" srcset="" style={{marginRight:'20px'}} />

            <img src={ama} alt="Amazone Logo" srcset="" />
            </div>
        </div>
    )
}

export default Button