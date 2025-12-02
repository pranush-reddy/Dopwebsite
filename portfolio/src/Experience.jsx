import React from 'react'
import TKReels from './assets/tkreels.png'
import Reelify from './assets/reelify.png'
import Channa from './assets/Channa.png'
import './Experience.css';

function Experience() {
  return (
<>
<div className='experience'>
    <h2>Brand Journey🎞️</h2>
    <div className='dis-flex'>
        <img src={TKReels}/>
        <img style={{scale:'1.8'}} src={Reelify}/>
         <img id='channa' src={Channa}/>
    </div>
</div>
</>
  )
}

export default Experience