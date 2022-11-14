import React from 'react'
import { ReactDOM } from 'react'
import Navbar from '../../components/navbar/Navbar'
import c1 from '../../asserts/images/carousel1.webp'
import c2 from '../../asserts/images/carousel2.avif'
import c3 from '../../asserts/images/carouel3.jpg'
import c4 from '../../asserts/images/carousel4.jpg'
import c5 from '../../asserts/images/carousel5.png'
import tv1 from '../../asserts/images/tv1.webp'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './home.css'
import Footer from '../../components/footer/Footer'
function Home() {
  return (
    <div>
        <Navbar/>
        <div className='carousel'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" data-interval="0.5">
    <div class="carousel-item active" data-interval="1">
      <img src={c1} class="d-block w-100" height="700px" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="1">
      <img src={c2} class="d-block w-100" height="700px" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="1">
      <img src={c3} class="d-block w-100" height="700px" alt="..."/>
    </div>
    {/* <div class="carousel-item" data-interval="1">
      <img src={c4} class="d-block w-100" height="700px" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="1">
      <img src={c5} class="d-block w-100" height="700px" alt="..."/>
    </div> */}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className='cards'>
          <div className='title'>
            <h3>HOT PRODUCTS</h3>
            <p className='p1'>The followings are domestic appliances from Aiwa, including aiwa smart TV, LCD Monitor, Speakers, Display, Refrigerator, Air Conditioner, 
              Washing Machine, Environmental Accessories, Kitchen Appliances, and so on. They all enjoy high quality and always are improved according 
              to the customers’ needs. 
              Over these years, Aiwa has become an all-around household appliance provider from a professional TV manufacturer.</p>
          </div>
          <div className='hot-products-wrapper'>
            <div className='hot-products-content'>
              <div className='hot-products-img'>
                <img src={tv1} alt="" width="200px"/>
              </div>
              <div className='hot-product-desc'>
                <h4>TV</h4>
                <h6>Full screen tv</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-wrapper'>
          <div className='form-wrapper'>
            <div className='form-content'>
              <div className='form-title my-3 px-3'>
                <h4>Contact Us</h4>
              </div>
              <div className='form-label'>
                <form action="">
                <div className='row'>
                  <div className='col-md-6'>
                  <input type="text" className="form-control m-3" placeholder='Name'/>
                  <input type="text" className="form-control m-3" placeholder="Country" />
                  </div>
                  <div className='col-md-6'>
                  <input type="text" className="form-control m-3" placeholder='Phone Number'/>
                  <input type="text" className="form-control m-3" placeholder="Email" />
                  </div>
                  </div>
                  <div className='comment px-4'>
                    <textarea name="comment" id="comment" cols="100" rows="5" placeholder='Please indicate which products/services you are interested in and we will contact you soon'></textarea>
                  </div>
                  <div className='button px-4'>
                    <input type="button" value="Submit" id='home-btn' className='home-btn'/>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        <Footer/>     
    </div>
    </div>
  )
}

export default Home;