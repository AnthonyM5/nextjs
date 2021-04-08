import data from '../data'


const Home = () => {
    return (
        <div className="section" id="home">
          <div className="container">
            <div className="header-wrapper">
                <h2>
                  Hi, I'm {data.name}{" "}
                  <span role="img" aria-label="Emoji">
                    👋
                  </span>
                </h2>
                <div className="heading-wrapper">
                  <h1>
                    {data.headerTagline[0]
                      ? data.headerTagline[0]
                      : "Building digital"}
                  </h1>
                  <h1>
                    {" "}
                    {data.headerTagline[1]
                      ? data.headerTagline[1]
                      : "products, brands"}
                  </h1>
                  <h1>
                    {" "}
                    {data.headerTagline[2]
                      ? data.headerTagline[2]
                      : "and experience"}
                  </h1>
                </div>
            </div>
          </div>
        </div>
      )
}

export default Home