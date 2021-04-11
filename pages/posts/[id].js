import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'


export default function Post({ postData }) {
    return (
      <>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className="prose lg:prose-xl container mx-auto">
          <h1 className="text-5xl font-bold p-1">{postData.title}</h1>
          <div className="p-1">
            <Date dateString={postData.date} />
          </div>
          <div 
          className=""
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <div>
        </div>
        </article>
        <Link href="/">
            <a className="p-4">← Back to home</a>
          </Link>
        </>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}