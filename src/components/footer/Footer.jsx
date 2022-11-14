import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div>
        <div className='footer'>
          <div className='footer-wrapper p-5'>
            <div className='row'>
                <div className='col-md-3'>
                  <div className='footer-title'>Products</div>
                </div>
                <div className='col-md-3'>
              <div className='footer-title'>Services</div>
              <p>Strenth Witness</p><br />
              <p>Download center</p>
               </div>
               
               <div className='col-md-3'>
                <div className='footer-title'>Partners & Distributors</div>
               </div>
               <div className='col-md-3'>
                <div className='footer-title'>Contact</div>
               </div>
              </div>
            </div>
            </div>
    </div>
  )
}

export default Footer