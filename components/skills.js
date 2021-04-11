import data from '../data'

const Skills = () => {
    return (
    <div className="section p-4 ">
      <div className="container mx-auto p-4">
        <div className="skills-container container mx-auto">
          <h1 className="text-5xl font-bold p-2">Skills</h1>
          <div className="skills-grid grid grid-cols-3 gap-4 mx-auto">
            {data.skills.map((skill, index) => (
              <div className="skill shadow-2xl rounded-lg border-4 border-opacity-25" key={index}>
                <img className="h-12 flex flex-wrap content-start mx-auto" src={skill.img.props.src} alt="css"></img>
                <p className="leading-normal p-4 font-sans">{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}

export default Skills 