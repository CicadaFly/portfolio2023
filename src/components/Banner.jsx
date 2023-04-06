import personalImg from '../assets/person1.jpg'
import classes from './Banner.module.css'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub } from "react-icons/fa"

const Banner = () => {
  return (
    <div className={`${classes.section} "section is-flex-direction-row is-align-content-center"`} id="banner">
      <div className="container mx-auto my-auto columns is-align-content-center pt-6">
        <div className="column is-two-thirds-desktop is-full-mobile is-align-self-center">
          <h2 className="has-text-weight-bold is-size-2-desktop is-size-4-mobile font">
            Hello, I am Harvie Liu!
          </h2>
          <h2 className="subtitle is-size-3-desktop is-size-4-mobile mt-2">
          <TypeAnimation className='subtitle is-size-3-desktop is-size-4-mobile mt-2'
                sequence={[
                'I was a Master of Ecology',
                1000,
                'I was a Digital Marketing Specialist',
                1000,
                'I was a Market Analyst',
                1000,
                'I was a Project Manager',
                1000,
              ]}
              speed={40}
              deletionSpeed={90}
              repeat={Infinity}/>
          </h2>
          <h1 className="title is-size-1-desktop is-size-3-mobile">
            Now I am a Front-End Developer
          </h1>
        </div>
        <div className="column is-justify-content-start is-align-self-center is-full-mobile">
          <figure className='image is-1by1'>
            <img src={personalImg}/> 
          </figure>
          <div className={classes.Git}>
            <a href="https://github.com/CicadaFly" target="_blank" rel="noopener noreferrer">
              <FaGithub className='mx-2 has-text-black' size = '3vw'/>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner