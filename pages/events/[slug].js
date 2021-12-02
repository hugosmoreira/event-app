const { events } = require('./data.json')
import { API_URL } from '../../config/index'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '@/styles/Event.module.css'
import Link from 'next/link'







export default function EventPage({ evt }) {
    const router = useRouter()
  
    return (
      <Layout>
        <div className={styles.event}>
          <span>
            {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
          </span>
          <h1>{evt.name}</h1>
          
          {evt.image && (
            <div className={styles.image}>
              <Image
               alt="event"
                src={evt.image}
                width={960}
                height={600}
              />
            </div>
          )}
  
          <h3>Performers:</h3>
          <p>{evt.performers}</p>
          <h3>Description:</h3>
          <p>{evt.description}</p>
          <h3>Venue: {evt.venue}</h3>
          <p>{evt.address}</p>
  
         
  
          <Link href='/events'>
            <a className={styles.back}>{'<'} Go Back</a>
          </Link>
        </div>
      </Layout>
    )
  }
  

export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`${API_URL}/api/events?slug=${slug}`)
    const events = await res.json()
  
    return {
      props: {
        evt: events[0],
      },
    }
  }