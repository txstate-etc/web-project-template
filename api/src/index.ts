import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import db from 'txstate-node-utils/lib/db'
import { schema } from './graphql/schema'

const app = express()

app.get('/api/time', (req, res) => {
  res.send(new Date())
})

const apolloServer = new ApolloServer({
  schema
})

apolloServer.applyMiddleware({ app, path: '/api/' })

app.listen(3000, async () => {
  await db.connect()
  console.log('Server Ready 🚀')
})
