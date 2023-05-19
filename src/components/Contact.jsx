import classes from './Contact.module.css'
const Contact = () =>{

  return (
    <div className="section pb-0" id="contact">
      <div className="container columns">
        <div className="column">
          <h3 className={classes.Line}>If you're interested in working with me or want to say hi, 
          feel free to drop me an email at <span className={classes.Highlight}>semiacicada@gmail.com</span>.
          </h3>
        </div>
      </div>
    </div>
  )
}
export default Contact