import classes from './About.module.css'
import personalImg2 from '../assets/person2.jpg'
const About = () => {
  return (
    <div className={`${classes.section} "section is-flex-direction-row is-align-content-center"`} id="about">
      <div className='container mx-auto my-auto columns my-auto is-align-content-center m-0'>
      <div className="column is-justify-content-start is-align-self-center is-full-mobile">
          <figure className='is-hidden-mobile'>
            <img src={personalImg2}  style={{maxHeight:"380px"}}/> 
          </figure>
        </div>
      <div className="column is-two-thirds-desktop is-full-mobile is-align-self-center">
          <div className='column is-four-fifths-desktop content'>
            <h3 className='is-size-3 is-size-4-mobile'>Personal Traits:</h3>
            <ul className='is-size-5 is-size-6-mobile'>
              <li><span className={classes.hl}>Excellent communication skills and a team player</span>, capable of working collaboratively with others towards shared goals.</li>
              <li><span className={classes.hl}>Enthusiastic and eager to learn new technologies</span>, always seeking to stay current with the latest industry developments.</li>
              <li><span className={classes.hl}>Focused and dedicated to completing tasks on time</span> and to the best of my abilities.</li>
              <li>With a background in client-facing roles,  <span className={classes.hl}>could understanding of customer needs and am able to translate those needs into effective solutions.</span></li>
            </ul>
          </div>
          <div className='column is-one-fifths'>
            <h3 className='is-size-3 is-size-4-mobile  is-align-self-center'>Skills:</h3>
          </div>
      </div>
      </div>
    </div>

  )
}

export default About