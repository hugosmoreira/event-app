import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from "../components/Layout"
import styles from "../styles/404.module.css"
import Link from "next/link"





export default function NotFoundPage() {
    return (
        <Layout title="Page not Found">
            <div className={styles.error} >
                <h1><FaExclamationTriangle/></h1>
                <h1>404</h1>
                <p>Page not found</p>
                <Link href='/'>Go back to Home</Link>
            </div>
            
        </Layout>
    )
}
