import data from '../data'

const Skills = () => {
    return (
    <div className="section">
      <div className="container mx-auto p-4">
        <div className="skills-container container mx-auto">
          <h1 className="text-5xl font-bold">Skills</h1>
          <div className="skills-grid grid grid-cols-3 gap-4 mx-auto">
            {data.skills.map((skill, index) => (
              <div className="skill shadow-2xl rounded-lg border-4 border-opacity-25" key={index}>
                <img className="h-8 flex flex-wrap content-start" src={skill.img.props.src} alt="css"></img>
                <p className="text-red-500">{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}

export default Skills 