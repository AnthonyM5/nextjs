
import data from '../data'

const Body = () => {
  console.log(data.about)
  return (
    <div className="section" id="about">
    <div className="container mx-auto">
      <div className="about-section grid grid-cols-3 gap-4">
        <div className="content col-span-2">
            <h1 className="text-5xl font-bold p-2">About Me</h1>
          <p className="font-sans">
            {data.aboutParaOne}
            <br></br>
            <br></br>
            {data.aboutParaTwo}
            <br></br>
            <br></br>
            {data.aboutParaThree}
          </p>
        </div>
        <div className="image-container container mx-auto place-content-center ">
          <img 
          className="object-contain content-center rounded-lg"
          src={data.aboutImage.props.src}alt="about"></img>
        </div>
      </div>
    </div>
  </div>
  )

}

export default Body