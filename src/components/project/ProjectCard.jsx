import classes from './Card.module.css'
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa"
import CardSlider from './CardSlider';
import { motion } from 'framer-motion';
const ProjectCard = ({header,image,description,tags,link,git}) =>{
  const fadeIn = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring',duration: 0.7 } }
  }
  return(
  <motion.div className='column is-two-fifths-desktop mx-5 is-11-mobile'
              variants={fadeIn}
              initial='hidden'
              whileInView={'show'}
              >
    <div className={`card ${classes.Card}`}>
      <header className="card-header">
      <p className="card-header-title">
        {header}
      </p>
      <div className='mx-3 mt-3'>
        { link && 
        <a href={link} target="_blank" rel="noopener noreferrer">   
          <FaExternalLinkAlt className='mx-2 has-text-black'size = '1.2rem'/>
        </a>
        }
        <a href={git} target="_blank" rel="noopener noreferrer">
          <FaGithub className='mx-2 has-text-black' size = '1.2rem'/>
        </a>
      </div>
      </header>
      <div className="card-image">
        <CardSlider image={image}/>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content is-clipped">
            <p className="title is-5">Description</p>
          </div>  
        </div>

        <div className="content">
          {description}
        </div>
        <div className='card-footer is-flex-direction-row'>

          {tags.map((tag,i)=>(
            <span key={i} className={`tag mt-3 mx-1 is-medium ${tag.class}`}>{tag.name}</span>
          ))}

        </div>
      </div>
    </div>
  </motion.div>
)}

export default ProjectCard