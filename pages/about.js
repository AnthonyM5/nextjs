import Link from 'next/link'
import Layout from '../components/layout'

function About(){
    return (     
        <div>
          <Layout>
            <p>My professional background is in E-commerce, and have held roles from front facing client services to back-office inventory planning/fulfillment. As an avid believer in continious learning, I have been lucky enough to have found a path to becoming a developer.</p>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          </Layout>
        </div>
    )

}

export default About