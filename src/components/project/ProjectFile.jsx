import timeline from '../../assets/TimeLineForm.png'
import timeline2 from '../../assets/timeline.gif'
import dnd from '../../assets/dnd.png'
import dnd2 from '../../assets/dnd.gif'
import food from '../../assets/foodcart.png'
import food2 from '../../assets/foodcart.gif'
import cost from '../../assets/reduxAcc.png'
import cost2 from '../../assets/reduxAcc.gif'
import rails from '../../assets/railstagram.png'
import rails2 from '../../assets/railstagram.gif'
const ProjectFile = [
  {
    'cardHeader':'Drag-Drop sticky note',
    'cardImages':[dnd,dnd2],
    'description':'A SPA in the form of a sticky note, inspiring by Trello, which allows users to add new sticky notes and contents. Contents could be draged and droped between the notes.',
    'tags':[{ name: "React", class: "has-background-primary-dark has-text-white" },
            { name: "Bootstrap", class: "is-info" },
            { name: "React-DnD", class: "has-background-warning-dark has-text-white" }],
    'git':'https://github.com/CicadaFly/dragtodo',
  },{
    'cardHeader':'Timeline Calendar',
    'cardImages':[timeline,timeline2],
    'description':"A timeline that can be used to record and plan important dates, with events automatically arranged in chronological order after being added.This webpage does not have a responsive design version.For the best experience, please viewing on desktop.",
    'tags':[{ name: "React", class: "has-background-primary-dark has-text-white" },
            { name: "CSS", class: "is-info" }],
    'git':'https://github.com/CicadaFly/fishbubble',
    'link':'https://cicadafly.github.io/fishbubble/'
  },{
    'cardHeader':'Food cart',
    'cardImages':[food,food2],
    'description':'A shopping cart SPA integrated with Firebase. Using useContext to synchronize data between individual elements. It also automatically calculates the total value of the items in the cart.',
    'tags':[{ name: "React", class: "has-background-primary-dark has-text-white" },
            { name: "CSS", class: "is-info" },
            { name: "Firebase", class: "has-background-warning-dark has-text-white" }],
    'git':'https://github.com/CicadaFly/Food_Cart_Re',
  },{
    'cardHeader':'Expense tracker',
    'cardImages':[cost, cost2],
    'description':'An accounting website made using the Redux library, with a feature supporting fast searching of consumption records.',
    'tags':[{ name: "React", class: "has-background-primary-dark has-text-white" },
            { name: "Bulma", class: "is-info" },
            { name: "Redux", class: "has-background-warning-dark has-text-white" }],
    'git':'https://github.com/CicadaFly/reduxPractice',
  },{
    'cardHeader':'Instagram clone',
    'cardImages':[rails, rails2],
    'description':'A project in an online course on Udemy, using Rails 7 to create an Instagram clone with features such as adding members, adding posts and photos, following other users, and liking posts.',
    'tags':[{ name: "Ruby on Rails", class: "has-background-primary-dark has-text-white" },
            { name: "Bootstrap", class: "is-info" }],
    'git':'https://github.com/CicadaFly/Rails_instagram',
  }

]

export default ProjectFile