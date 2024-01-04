import React from 'react'
import logoApple from '../../assets/logoApple.png'
import iphone from '../../assets/iphone.jpg'
import './PubHome.css'
const PubHome = () => {
  return (
    <div>
        <div className='blackPub'>
                
            <div className='blackBack'>
                <div className='upTo10Back'>
                    <div >
                        <img src={logoApple} alt="" />
                    </div>
                    <h1 className='textUpTO10'>Up to 10% off Voucher</h1>
                    <div className='shNow'>
                        <h3 className='shopNow'>Shop Now</h3>
                    </div>
                </div>
                <div>
                <img className='iphone' src={iphone} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PubHome