import classes from './Card.module.css'
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa"
const ProjectCard = ({header,image,description,tags,link,git}) =>{
  return(
  <div className='column is-half'>
    <div className={`card ${classes.Card}`}>
      <header className="card-header">
      <p className="card-header-title">
        {header}
      </p>
      <div className='mx-3 mt-3'>
        { link && 
        <a href={link} target="_blank">   
          <FaExternalLinkAlt className='mx-2 has-text-black'size = '1.2rem'/>
        </a>
        }
        <a href={git} target="_blank">
          <FaGithub className='mx-2 has-text-black' size = '1.2rem'/>
        </a>
      </div>
      </header>
      <div className="card-image">
        <figure className="image is-4by3">
        <img src={image} alt="Placeholder image"/>
        </figure>
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
          <div>
          {tags.map((tag,i)=>(
            <span key={i} className={`tag mt-3 mx-1 is-medium ${tag.class}`}>{tag.name}</span>
          ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default ProjectCard