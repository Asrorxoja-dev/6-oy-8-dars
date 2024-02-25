import React, { useEffect } from 'react'
import './index.css';
import loader from '../assets/1488.gif'
import { preLoaderAnim } from '../animation/animation';
function Loader() {

    useEffect(()=>{
  preLoaderAnim();
    },[])
  return (
    <>
    <div className="preloader">
        <div className='text-container'>
            <div>
                <img src={loader} alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Loader