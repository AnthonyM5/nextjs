import Body from '../components/home'
import { getSortedPostsData } from '../lib/posts'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Header, {siteTitle } from '../components/header'
import utilStyles from '../styles/utils.module.css'


 

    

    
//   )
// }

export default function Home({ allPostsData }) {
  return (
    <>
      <Header>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Body>
      </Body>
      <main className={styles.main}>
        <div className="section" id="home">        
          <h1 className={styles.title}>
            Read{' '}
            <Link href="/posts/first-post">
              <a>the blog!</a>
            </Link>
          </h1>
        </div>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
        
          <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
            <div class="p-6 max-w-sm mx-auto bg-blue rounded-x1 shadow-md flex items-center space-x-4">
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link><br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            </div>
          ))}
          </ul>
        </section>
      </main>
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
  
