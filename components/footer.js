import data from '../data'

const Footer = () => {
    return (
        <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img.props.src} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}

export default Footer