import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Layout = ({ title, description, keywords, children }) => {
    return (
        <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        <div className={styles.container}>{children}</div>
    </div>
    )
}


Layout.defaultProps = {
    title: 'Promo Fight | Advertise your product or service',
    description: 'Advertise your product or service with fighters scheduled events ',
    keywords: 'fight, events'
}

export default Layout;

