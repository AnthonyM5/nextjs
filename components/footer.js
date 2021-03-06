import data from '../data'

const Footer = () => {
    return (
        <div className="section container mx-auto text-center p-4 " id="contact">
      <div className="container">
        <div className="footer-container container mx-auto">
            <h1 className="text-5xl font-bold p-2">Contact</h1>
            <h2 className="text-2xl font-bold p-2">{data.contactSubHeading}</h2>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons grid grid-cols-3 gap-0 p-2 w-24 mx-auto">
            {data.social.map((socialLink, index) => (
                <div className="container flex flex-row">
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                className="h-6"
                src={socialLink.img.props.src} alt="icons"></img>
              </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}

export default Footer