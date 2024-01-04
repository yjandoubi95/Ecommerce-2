import React, { useState, useEffect } from 'react';
import PubHome from '../../components/PubHome/PubHome'
import './HomePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
const HomePage = () => {

    const [duration, setDuration] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        const endDate = new Date('2024-01-10T12:00:00Z');
    
        const calculateDuration = () => {
          const now = new Date();
          const difference = endDate - now;
    
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
          setDuration({ days, hours, minutes, seconds });
        };
    
        const intervalId = setInterval(() => {
          calculateDuration();
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    

  return (
    <div>
        <div className='homeHead'>
        
        <div className='categList'> 
                <ul>Woman's Fashion</ul>
                <ul>Man's Fashion</ul>
                <ul>Electonics</ul>
                <ul>Home & Lifestyle</ul>
                <ul>Medicine</ul>
                <ul>Sports & Outdoor</ul>
                <ul>Baby's & Toys</ul>
                <ul>Groceries & Pets</ul>
                <ul>Health & Beauty</ul>
                
        </div>
        <PubHome/>
        </div>
        <div className='homeBody'>
            <div className='flashSalesPlace'>
                <h1>Flash Sales</h1>
                <div className='duration'>
                    <div className='durationDay'>
                        <p>Days</p>
                        <h2 className='durationTime'>{`${duration.days} :`}</h2>
                    </div>
                    <div className='durationHours'>
                        <p>Hours </p>
                        <h2 className='durationTime'>{`${duration.hours} :`}</h2>
                    </div>
                    <div className='durationMinutes'>
                        <p> Minutes </p>
                        <h2 className='durationTime'>{`${duration.minutes} :`}</h2>
                    </div>
                    <div className='durationSeconds'>
                        <p>Seconds</p>
                        <h2 className='durationTime'>{`${duration.seconds}`}</h2>
                    </div>
                
           
          </div>
            </div>
            <div className='cardPlace'>
                <div className='card'>
                <ProductCard/>
                </div>
                <div className='card'>
                <ProductCard/>
                </div>
                <div className='card'>
                <ProductCard/>
                </div>
                <div className='card'>
                <ProductCard/>
                </div>
            </div>
                <div className='showButt'>
                <button className='showMore'>View All Products</button>
                </div>
        </div>
    </div>
  )
}

export default HomePage