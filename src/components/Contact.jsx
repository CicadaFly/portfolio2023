import classes from './Contact.module.css'
const Contact = () =>{

  return (
    <div className="section pb-0" id="contact">
      <div className="container columns">
        <div className="column">
          <h3 className={classes.Line}>If you're interested in working with me or want to say hi, 
          feel free to drop me an email at <span className={classes.Highlight}>semiacicada@gmail.com</span>,
          or fill out the form on the right.</h3>
        </div>
        <div className="column">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8p9uvks9GBoCEUKg5TOIjzhvHDRWQIgJ2qHnmJIqfi10PwQ/viewform?embedded=true" width="640" height="800" frameBorder="0" marginHeight="0" marginWidth="0">載入中…</iframe>
        </div>
      </div>
    </div>
  )
}
export default Contact