import React,{useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import p1 from '../../asserts/images/p1.webp'
import p11 from '../../asserts/images/p11.webp'
import './products.css'

function Products() {
  const [image,setImage]=useState('https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDZmLzk4MTAwNTg1NzU5MDIuanBnfDRlNjk2MTc0MjNiODNmYmZkNmVjNWQwMjM1N2QxMzExOWFkNzcyOTNiY2M3ODU0ZmUyN2Y5OWEyNjExNzFkYTY')
  return (
    <div>
        <Navbar/>
        <div className='products-wrapper'>
            <div className='products-header'>

            </div>
            <div className='container my-5'>
              <div className='row'>
                <div className='col-md-3'>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "18rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='view-more-wrapper'>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 </div>
                 <button className='view-more-btn my-2'>View More</button>
                </div>
                </div>
                </div>

                <div className='col-md-3'>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "18rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='view-more-wrapper'>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 </div>
                 <button className='view-more-btn my-2'>View More</button>
                </div>
                </div>
                </div>

                <div className='col-md-3'>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "18rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='view-more-wrapper'>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 </div>
                 <button className='view-more-btn my-2'>View More</button>
                </div>
                </div>
                </div>

                <div className='col-md-3'>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "18rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='view-more-wrapper'>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 </div>
                 <button className='view-more-btn my-2'>View More</button>
                </div>
                </div>
                </div>
                 
            </div>
            </div>
        </div>
    </div>
  )
}

export default Products