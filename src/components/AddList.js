import React, { useState } from 'react'

export default function AddList() {
    const [url, seturl] = useState('')
    const [detail, setdetail] = useState('')
const report=()=>{
    //check url and send to db
}
  return (
    <div style={{backgroundColor:"#232537",height:"100vh"}}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",height:"60vh"}}>
      <input value={url} onChange={(e)=>{seturl(e.target.value)}} style={{width:"70vw",backgroundColor:"white",height:50,borderRadius:15,padding:10,justifyContent:"center",marginBottom:20}} placeholder='Enter Website Url'></input>
      <input value={detail} onChange={(e)=>{setdetail(e.target.value)}} style={{display:'flex',width:"70vw",backgroundColor:"white",height:200,borderRadius:15,padding:10,justifyContent:"flex-start",alignItems:'flex-start',marginBottom:30}}   placeholder='Enter the Details'></input>
      <button onClick={report} style={{marginLeft:20,height:45,width:180,borderRadius:10,color:"white",fontSize:20,fontWeight:"bold",backgroundImage:'linear-gradient(120deg,#ff4040 18.56%,#a20bd8 98.01%)',border: '0 #d92a7e'}}>Report</button>
      </div>
    </div>
  )
}
