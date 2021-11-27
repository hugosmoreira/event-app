import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '../styles/Layout.module.css'

const Layout = ({ title, description, keywords, children }) => {

    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Header />
            {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    )
}


Layout.defaultProps = {
    title: 'Promo Fight | Advertise your product or service',
    description: 'Advertise your product or service with fighters scheduled events ',
    keywords: 'fight, events'
}

export default Layout;

