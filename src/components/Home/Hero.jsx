import React from 'react'
import farmer from '../../assets/farmer.jpg';
import Origin2Market from '../../assets/Origin2Market.jpeg';
import {Link} from 'react-router-dom';
const Hero=()=>{
  return (
    <div>
      <div className="container  " style={{width:'100%',textAlign:"center",padding:"50px 20px"}}>
        <h3 className="mt-2">Direct from Farm to Table,Verified Before You Buy</h3>
        <p className="mt-2">Cut out the middlemen.FarmerFarmers keep around 98% of thier<br></br> earnings,
        and buyers  get farm-fresh produce with optional on-field quality inspection</p>
      </div>
      <div className="container-fluid " >
          <div className='row align-items-center'>
            <div className='col-6 mt-2 p-2'>
               <img src={farmer} alt="farmer" className="px-4" style={{width:"50" ,height:"50"}}></img>
            </div>
               <div className='col-6 mt-2 '>
                     <h4 style={{textAlign:"center"}}>Why Origin2Market</h4>
                     <p className="py-4 mt-2"style={{}} >
                      Origin2Market bridges the gap between agricultural producers and buyers by establishing a transparent,
                       direct supply chain that removesunnecessary intermediaries.<br></br> By sourcing directly from local growers, 
                       our platform ensures farmers retain up to 98% of their earnings while delivering harvest-fresh produce 
                       straight to your table.<br></br>Every batch comes with optional on-field quality inspections and verified origin tracking,
                       guaranteeing top-tier freshness,fair market pricing, and complete peace of mind for both households and bulk buyers.
                     </p>
            </div>
        </div>
        </div>
        <hr></hr>
        <div className="container mb-4 mt-4 ">
          <div className="row">
            <div className="col-4 d-flex " >
               <img src={Origin2Market} alt="origin2market" width="65%" height="65%"></img>
            </div>
              <div className="col-4 ">
                <h5>About Company</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Home</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Directory</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Login</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Free Regestration</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>News</Link>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                       <h5>Policy Info</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>FAQ</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Terms of Services</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Disclamier</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Copyright</Link>
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"None"}}>Our Partner</Link>
                  </li>
                </ul>
              </div>
          </div>

        </div>
    </div>
  )
}

export default Hero
