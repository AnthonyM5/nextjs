import data from '../data'


const Home = () => {
    return (
        <div className="section container mx-auto text-center px-6" id="home">
          <div className="container">
            <div className="header-wrapper">
                <h2 className="text-blue-400 text-xl">
                  Hi, I'm {data.name}{" "}
                  <span role="img" aria-label="Emoji">
                    👋
                  </span>
                </h2>
                <div className="heading-wrapper">
                  <h1 className="text-5xl font-bold">
                    {data.headerTagline[0]
                      ? data.headerTagline[0]
                      : "Building digital"}
                  </h1>
                  <h1 className="text-5xl font-bold">
                    {" "}
                    {data.headerTagline[1]
                      ? data.headerTagline[1]
                      : "products, brands"}
                  </h1>
                  <h1 className="text-5xl font-bold">
                    {" "}
                    {data.headerTagline[2]
                      ? data.headerTagline[2]
                      : "and experience"}
                  </h1>
                </div>
            </div>
          </div>
          <div className="container mx-auto p-6">
            <p className="justify-center" id="about-me">{data.headerParagraph}</p>
          </div>
        </div>
        

        
      )
}

export default Home