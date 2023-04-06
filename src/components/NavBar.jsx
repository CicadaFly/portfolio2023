import classes from './NavBar.module.css'
import { useState } from 'react';
import { GoHome,GoPerson,GoProject,GoMail,GoFold, GoUnfold } from "react-icons/go";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

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
      <motion.div className='container my-2 is-flex is-justify-content-space-between is-align-items-center'
                  animate={{width: open && "100%"}} 
                  transition={{duration: 0.7}}>
        {open ? content : <GoUnfold className={`${classes.Icon} icon is-medium is-align-items-center`} onClick={openHandler}/>}
      </motion.div>
    </nav>
  )
}

export default NavBar