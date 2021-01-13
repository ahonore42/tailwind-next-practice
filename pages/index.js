import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Adam, and this is my first Next.js application.</p>
        <p>
          This is a sample website that I'm using to learn {' '}
          <a href="https://nextjs.org/learn">Next.js</a> with Tailwind CSS.
        </p>
        <p>
          <Link href="/examples/cards">
            <a>View the other page</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}