import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './sidebar.module.css'
type Props = {
  children?: ReactNode
  title?: string
}
const Sidebar = ({ children, title = 'This is the default title' }: Props) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className={styles.nav}>
      
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </nav>
    {children}
      </div>
      )

export default Sidebar
