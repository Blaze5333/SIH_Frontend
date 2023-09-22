import React from 'react'
import './index.css'
export default function List() {
  return (
    <div style={{height:"100vh",backgroundColor:"#232537"}}>
    <div style={{height:80}}>

    </div>
      <div style={{width:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
      <table class="table">
  <thead class="thead-dark thead" >
    <tr>
      <th scope="col">Sl no.</th>
      <th scope="col">Url</th>
      <th scope="col">Category</th>
      <th scope="col">Reported By</th>
      <th scope="col">Reported On</th>
      <th scope='col'>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='r1'>1</th>
      <td>iddanakaget2023-2.vercel.app</td>
      <td>Phishing</td>
      <td>@canyouhearmeouthere@gmail.com</td>
      <td>8/11/23</td>
      <td>Shared in my senior high school with Dana Id look like official account</td>
    </tr>
    <tr>
    <th scope="row" className='r1'>2</th>
      <td>iddanakaget2023-2.vercel.app</td>
      <td>Phishing</td>
      <td>@canyouhearmeouthere@gmail.com</td>
      <td>8/11/23</td>
      <td>Shared in my senior high school with Dana Id look like official account</td>
    </tr>
    <tr>
      <th scope="row" className='r1'>3</th>
      <td>iddanakaget2023-2.vercel.app</td>
      <td>Phishing</td>
      <td>@canyouhearmeouthere@gmail.com</td>
      <td>8/11/23</td>
      <td>Shared in my senior high school with Dana Id look like official account</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}
