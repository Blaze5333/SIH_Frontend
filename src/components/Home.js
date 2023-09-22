import React from 'react'
import { LinearGradient } from 'react-text-gradients'
import WaterWave from 'react-water-wave';
import { useState } from 'react';
import Confetti from 'react-confetti';
// import useWindowSize from 'react-use/lib/useWindowSize'
import warning from './sound/beep-warning-6387.mp3'
export default function Home() {
    const [message, setmessage] = useState('')
    const [url, seturl] = useState('')
    const [open, setopen] = useState(false)
    const audio=new Audio(warning)
    // const { width, height } = useWindowSize()
    let height=document.body.scrollHeight
    let width=window.innerWidth
    const check=()=>{
      audio.loop=true
      audio.play()
        console.log(url)
      //api call
      setopen(true)
      setTimeout(() => {
        audio.loop=false
      }, 1000);
      setTimeout(() => {
        setopen(false)
       
      }, 8000);
    }
  return (
    <div style={{backgroundColor:"#232537",flex:1}}>
    {open&&<Confetti height={height}  width={width} numberOfPieces={300}/>}
    
      <div style={{display:"flex",top:40}}>
      <div style={{width:"50vw",display:"flex",justifyContent:'center',alignItems:'center',padding:20}}>
      <h1 style={{fontSize:60,fontWeight:"bold"}}>
      <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
    Stay Sharp, Stay Safe: Don't Take the Bait, Verify Before You Click!
  </LinearGradient>
      </h1>
      </div>
        <div style={{width:"50vw",display:"flex",justifyContent:"center",alignItems:'center'}}>
            <img style={{height:500}} src={require('./images/phishing.png')}></img>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:"center",alignItems:"center",marginTop:40}}>
        <input value={url} onChange={(e)=>{seturl(e.target.value)}} style={{width:"70vw",backgroundColor:"white",height:50,borderRadius:15,padding:10,justifyContent:"center"}} placeholder='Enter Website Url'></input>
        <button onClick={check} style={{marginLeft:20,height:45,width:120,borderRadius:10,color:"white",fontSize:20,fontWeight:"bold",backgroundImage:'linear-gradient(120deg,#ff4040 18.56%,#a20bd8 98.01%)',border: '0 #d92a7e'}}>Check</button>
      </div>
      <div style={{width:"100vw", display:'flex',justifyContent:"center"}}>
      {message&&<div>

      </div>}
  <div style={{width:"80vw",backgroundImage:'linear-gradient(120deg,#ff4040 18.56%,#a20bd8 98.01%)',border: '0 #d92a7e',borderRadius:100,margin:20,marginTop:80}}>
     <div style={{width:"100%",display:'flex',justifyContent:"center",height:100,alignItems:'center'}}>
     <h1 style={{color:"white",fontSize:50,fontWeight:"bold"}}>How Does it Work?</h1>
     </div>
     <div style={{width:"100%",padding:20,display:"flex",justifyContent:"center"}}>
        <p style={{color:"white", fontSize:20}}>Phishing is a prevalent online scam where criminals impersonate legitimate sites. To combat this threat, we have implemented an advanced system that combines multiple techniques for efficient detection of malicious URLs. Our system employs an Artificial Neural Network trained on a dataset of 600,000 URLs and enhances its capabilities by extensively analyzing the top 1 million URLs on the World Wide Web. Furthermore, we cross-reference these URLs with blacklists from trusted sources like Google, Norton, URLVoid, and others. These comprehensive upgrades empower our system to identify and protect users from malicious websites, providing a robust defense against phishing scams.</p>
     </div>
  </div>
  </div>
    </div>
    
  )
}
