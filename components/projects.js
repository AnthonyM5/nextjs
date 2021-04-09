import data from '../data'

data.projects.map(project => console.log(project.imageSrc))
const Projects = () => {
    return(
    <div className="section" id="work">
      <div className="container mx-auto ">
        <div className="work-wrapper mx-auto text-center">
            <h1 className="text-3xl font-bold">Projects</h1>
          <div className="grid grid-cols-3 gap-4 px-6">
              {data.projects.map((project, index) => (
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20" key={index}>
                  {project.title}
                  <p className="text-blue">{project.para}</p>
                  <a href={project.url}><img 
                  className="h-18 flex flex-wrap content-start"
                  src={project.imageSrc.props.src} /></a>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    )
}

export default Projects