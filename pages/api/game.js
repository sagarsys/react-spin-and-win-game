import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { ObjectID, ObjectId } from 'mongodb'
import { nextSpin } from '../../lib/game'

const handler = nextConnect()

const initialGameSettings = {
    balance: 1000,
}

const createGame = () => {
    return {
        _id: new ObjectID(),
        ...initialGameSettings,
    }
}

handler.use(middleware)

handler.get(async (req, res) => {
    const { _id, odds, stake } = req.query
    const game = await req.db.collection('game').findOne(ObjectId(_id))
    const outcome = nextSpin(odds, stake, game.balance)
    await req.db.collection('game').updateOne(
        { _id: ObjectId(_id) },
        {
            $set: {
                balance: outcome.balance,
            },
        }
    )
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log('API NEXT SPIN::', { game, outcome })
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    res.json({
        ...game,
        ...outcome,
    })
})

handler.post(async (req, res) => {
    const game = createGame()
    await req.db.collection('game').insertOne(game)
    res.json(game)
})

export default handler
