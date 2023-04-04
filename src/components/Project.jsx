import ProjectCard from './project/ProjectCard'
import ProjectFile from './ProjectFile'

const Project = () => {
  return (
    <div className="section h-full" id="project">
      <div className="container">
        <h2 className="subtitle is-size-2">Projects</h2>
        <div className="is-flex-wrap-wrap columns">
          {ProjectFile.map((e,i)=>(
            <ProjectCard key={i}
                        header={e.cardHeader}
                        image={e.cardImages}
                        description={e.description}
                        tags={e.tags}
                        link={e.link}
                        git={e.git}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
