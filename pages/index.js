import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


 

    

    
//   )
// }

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Read{' '}
          <Link href="/posts/first-post">
            <a>the blog!</a>
          </Link>
        </h1>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
        <Link href={`/posts/${id}`}>
          <a>{title}</a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
          ))}
        </ul>
      </section>
      </main>
      </Layout>
    </div>
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
  
