import React ,{useEffect,useRef} from 'react'
import App from './Nav.jsx'
import './Landing.css'
import LightRays from './LightRays';
import Contact from './Contact.jsx';
import Me from './Me.jsx';
import Connect from './Connect.jsx';
import Skills from './Skills.jsx';
import Gallery from './Gallery.jsx';
import Experience from './Experience.jsx';
import Footer from './Footer.jsx';
function Landing() {
const videoRef = useRef(null);

  return (<>
  
<div style={{ width: '100vw', height: '100vh', position: 'absolute', backgroundColor:'#060010' }}>
  <LightRays
    raysOrigin="top-center" raysColor="#ffffffff" raysSpeed={1.5} lightSpread={0.8} rayLength={1.2} followMouse={true} mouseInfluence={0.1} noiseAmount={0.1} distortion={0.05} className="custom-rays"/>
</div>

   <div className="video-background">
  <App/>


    <div className='main'>
        <h3>B YASHWANT KUMAR</h3>
        <h5 id='qual'>Video Editor - Cinematography - Designing</h5>
        <a id="btn" target='__blank' href='https://drive.google.com/drive/folders/1AnsWWkI6tkE6oXjtBpyznen_T0_kUV-U'  >
  Work Demo<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path opacity="0.5" d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg></a>
    </div></div>
    <Me/>
    <Skills/>
    <Experience/>
    <Gallery/>
    <Connect/>
    <Contact/>
    <Footer/>
  </>
  )
}


export default Landing


