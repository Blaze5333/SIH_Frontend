import React from 'react'
import './index.css'
import { LinearGradient } from 'react-text-gradients'
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div style={{display:"flex", justifyContent:"center",alignItems:'center'}}>
    
    <img style={{height:50}} src={require('./images/logo.png')}></img>
    <a className='name' style={{fontSize:25,fontWeight:"bold",marginLeft:10}} href='/'>
      <LinearGradient gradient={['to right', '#17acff ,#ff68f0']}>
      OPHISHERS
  </LinearGradient>
      </a>
    {/* <a class="navbar-brand" href="/" style={{marginLeft:10,fontWeight:"bold",fontSize:25}}>OPHISHERS</a> */}
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addList">Report Url</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/list">List</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0 bgc" type="submit" style={{fontWeight:"bold"}}>Login</button>
      </form>
    </div>
  </nav>
  )
}
