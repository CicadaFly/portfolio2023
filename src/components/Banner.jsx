import personalImg from '../assets/personal.jpg'

const Banner = () => {
  return (
    <div className="section is-flex-direction-row is-align-content-center" id="banner">
      <div className="container mx-auto columns">
        <div className="column is-two-thirds-desktop is-full-mobile is-align-self-center">
          <h2 className="has-text-weight-bold is-size-2-desktop is-size-4-mobile font">Hello, I am Harvie Liu!</h2>          
          <h2 className="subtitle is-size-3-desktop is-size-4-mobile mt-2">I was a Project Manager</h2>
          <h1 className="title is-size-1-desktop is-size-3-mobile">Now I am a Front-End Developer</h1>
        </div>
        <div className="column is-justify-content-center is-align-content-center">
          <figure>
            <img src={personalImg}/> 
          </figure>

        </div>
      </div>
    </div>

  )
}

export default Banner