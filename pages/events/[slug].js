const { events } = require('./data.json')



export default function EventPage() {

    const evt = events.filter(ev => ev.slug === req.query.slug)

    if(req.method === 'GET') {
        res.status(200).json(evt)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} not allowed`)
    }


    return (
        <div>
            <h1>My Event</h1>
        </div>
    )
}
