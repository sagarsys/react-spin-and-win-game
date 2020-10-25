import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'
import { DB_NAME, DB_PASS, DB_USER } from '../config'

const client = new MongoClient(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.jwiwn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect()
    req.dbClient = client
    req.db = client.db(DB_NAME)
    return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
