import React from 'react'
import { SiAdobelightroom , SiAdobephotoshop , SiDavinciresolve , SiCanva  } from 'react-icons/si';
import "./Skills.css"

const CustomSvgLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 509.659" width="50px" height="50px">
    <path fill="#ffffff" d="M116.971 2.475h278.058c62.971 0 114.494 51.522 114.494 114.494v275.722c0 62.971-51.523 114.493-114.494 114.493H116.971c-62.972 0-114.494-51.522-114.494-114.493V116.969c0-62.972 51.522-114.494 114.494-114.494z"/>
    <path fill="#000000ff" fillRule="nonzero" d="M116.97-.001h278.06C459.366-.001 512 52.633 512 116.969v275.722c0 64.335-52.634 116.969-116.97 116.969H116.97C52.636 509.66 0 457.026 0 392.691V116.969C0 52.633 52.636-.001 116.97-.001zm278.06 4.953H116.97C55.364 4.952 4.953 55.363 4.953 116.969v275.722c0 61.605 50.411 112.017 112.017 112.017h278.06c61.607 0 112.017-50.411 112.017-112.017V116.969c0-61.607-50.41-112.017-112.017-112.017z"/>
    <path fill="#000000ff" fillRule="nonzero" d="M109.095 181.505c-.123 8.897 0 17.813 0 26.71a5.41 5.41 0 003.225 4.917 23898.407 23898.407 0 0084.108 41.646c-27.832 13.672-55.563 27.526-83.353 41.259a5.938 5.938 0 00-4.081 4.876v26.771c1.854 18.195 15.823 32.817 33.913 35.503 3.509.326 7.02.266 10.529.266l155.85.001a45.08 45.08 0 0011.224-.92 40.825 40.825 0 0026.137-20.015 63.699 63.699 0 004.288-11.226c15.997 8.325 32.341 16.079 48.462 24.179.385.291.857.447 1.343.447a2.266 2.266 0 002.265-2.265v-.016-27.669a4.695 4.695 0 00-3.143-4.079l-135.323-67.112c45.203-22.431 90.412-44.876 135.63-67.335a4.573 4.573 0 002.754-4.082v-27.628a2.183 2.183 0 00-3.142-1.673l-49.135 24.363a42.189 42.189 0 00-6.388-14.917 40.613 40.613 0 00-30.097-17.422l-167.133-.001c-19.615.91-35.688 15.918-37.933 35.424v-.002z"/>
    <path fill="#ffffff" fillRule="nonzero" d="M140.049 181.689a10.082 10.082 0 019.345-5.55h161.545l.106-.001c5.066 0 9.368 3.72 10.096 8.734.205 2.714.102 5.428 0 8.162l-90.597 44.891c-30.608-15.018-61.03-30.22-91.535-45.339.142-3.632-.633-7.53 1.04-10.897zM139.009 317.095a24846.007 24846.007 0 0191.351-45.319c30.322 14.773 60.521 29.954 90.802 44.89-.204 3.918.755 8.162-1.305 11.773a10.085 10.085 0 01-8.755 5.08h-.082l-161.605.002-.277.002a10.202 10.202 0 01-9.007-5.411c-1.796-3.386-.98-7.345-1.122-11.017z"/>
  </svg>
);

function Skills() {
  return (
    <><div className='Skills'>
    <h2>I'm skilled in</h2>
    <div className='skill-icons'>
         <SiCanva color="#ffffff"  className='logoo' />
        <SiAdobelightroom color="transparent" fill='white' className='logoo' />
         <SiDavinciresolve color="transparent" fill='white' className='logoo'  />
       <SiAdobephotoshop color="#ffffff"  className='logoo' />
         <CustomSvgLogo color="transparent"  className='logoo' />
       
    </div>
    </div></>
  )
}

export default Skills