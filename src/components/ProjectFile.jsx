import timeline from '../assets/TimeLineForm.png'
import dnd from '../assets/dnd.png'
import food from '../assets/foodcart.png'
const ProjectFile = [
  {
    'cardHeader':'dragging to-do-list',
    'cardImages':dnd,
    'description':'A to-do-list-style SPA, using react-dnd and bootstrap to construct, allowing drag list between each others.',
    'tags':[{ name: "React", class: "has-background-primary-dark has-text-white" },
            { name: "Bootstrap", class: "is-info" },
            { name: "React-DnD", class: "has-background-warning-dark has-text-white" }],
    'git':'https://github.com/CicadaFly/dragtodo',
  },{
    'cardHeader':'Timeline Calendar',
    'cardImages':timeline,
    'description':"Timeline-style calendar, also can use as working flow tracker, after submitting event, timeline would auto sort by date value.This project did't supprot RWD, suggest using desktop to have best experience",
    'tags':[{ name: "React", class: "has-background-primary-dark has-text-white" },
            { name: "CSS", class: "is-info" }],
    'git':'https://github.com/CicadaFly/fishbubble',
    'link':'https://cicadafly.github.io/fishbubble/'
  },{
    'cardHeader':'Food cart style SPA',
    'cardImages':food,
    'description':'A shopping cart page, with add-in and calculate function, also could adjust products through firebase database',
    'tags':[{ name: "React", class: "has-background-primary-dark has-text-white" },
            { name: "CSS", class: "is-info" },
            { name: "Firebase", class: "has-background-warning-dark has-text-white" }],
    'git':'https://github.com/CicadaFly/Food_Cart_Re',
  },{
    'cardHeader':'Food cart style SPA',
    'cardImages':food,
    'description':'A shopping cart page, with add-in and calculate function, also could adjust products through firebase database',
    'tags':[{ name: "React", class: "has-background-primary-dark has-text-white" },
            { name: "CSS", class: "is-info" },
            { name: "Firebase", class: "has-background-warning-dark has-text-white" }],
    'git':'https://github.com/CicadaFly/Food_Cart_Re',
  }

]

export default ProjectFile