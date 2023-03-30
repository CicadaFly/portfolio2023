import classes from './NavBar.module.css'
import { useState } from 'react';
import { GoHome,GoPerson,GoProject,GoMail,GoFold, GoUnfold } from "react-icons/go";
import { Link } from 'react-scroll';


const NavBar = () => {
  const [open, isopen] = useState(true)
  const openHandler = () =>{
    isopen(!open)
  }
  let content = 
  <>
  <Link to='banner' activeClass='active' smooth={true} spy={true}><GoHome className={`${classes.Icon} icon is-medium is-align-items-center is-justify-content-center`}/></Link>
  <Link to='about' activeClass='active' smooth={true} spy={true}><GoPerson className={`${classes.Icon} icon is-medium is-align-items-center is-justify-content-center`}/></Link>
  <Link to='project' activeClass='active' smooth={true} spy={true}><GoProject className={`${classes.Icon} icon is-medium is-align-items-center is-justify-content-center`}/></Link>
  <Link to='contact' activeClass='active' smooth={true} spy={true}><GoMail className={`${classes.Icon} icon is-medium is-align-items-center is-justify-content-center`}/></Link>
  <GoFold className={`${classes.Icon} icon is-medium is-align-items-center is-justify-content-center`} onClick={openHandler}/>
  </>

  return(
    <nav className={classes.NavBar}>
      <div className='container mx-2 my-2 is-flex is-justify-content-space-between is-align-items-center'>
        {open ? content : <GoUnfold className={`${classes.Icon} icon is-medium is-align-items-center is-justify-content-center`} onClick={openHandler}/>}
      </div>
    </nav>
  )
}

export default NavBar