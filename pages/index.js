import Body from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Footer from '../components/footer'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Header, {siteTitle } from '../components/header'
import Projects from '../components/projects'


export default function Home({ allPostsData }) {
  return (
    <>
      <Header>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Body>
      </Body>
      <Projects/>
      <About/>
      <Skills>
      </Skills>
      <main className="container mx-auto">
        <div className="section" id="home">        
          <h1 className="font-bold text-5xl">
            Read{' '}
            <Link href="/posts/first-post">
              <a>the blog!</a>
            </Link>
          </h1>
        </div>
        <section className="blog-grid grid grid-cols-3 gap-4 mx-auto">
          <h2 className="font-bold text-2xl">Blog</h2>
          <ul className="p-2">
              {allPostsData.map(({ id, date, title }) => (
            <div class="p-6 max-w-sm mx-auto bg-blue rounded-x1 shadow-md flex items-center space-x-4">
              <li className="m-0.5" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link><br />
                <small className="font-light text-sml">
                  <Date dateString={date} />
                </small>
              </li> 
            </div>
          ))}
          </ul>
        </section>
      </main>
      <Footer>
      </Footer>
      </>
  )
}

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
  
