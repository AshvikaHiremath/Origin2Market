import React from 'react'
import Origin2Market from '../../assets/Origin2Market.jpeg';
import {Link} from 'react-router-dom';
const Nav=()=> {
  return (
    <div>
      <nav className="navbar px-2 stickey-top shadow-sm  " style={{background:'green'}}>
  <div className=" d-flex align-items-center">
    <Link className="navbar-brand" to="">
      <img src={Origin2Market} alt="origin2market" width="55" height="55"></img>
    </Link>  </div>
    <div className=' d-flex align-items-center gap-3 me-3 '>
          <Link className="nav-link fw-bold" style={{textDecoration:"none"}} aria-current="page" to="">LogIn</Link>
          <Link className="nav-link fw-bold" style={{textDecoration:"none"}} to="">SignUp</Link>
        
</div>
  
</nav>
      
    </div>
  )
}

export default Nav
