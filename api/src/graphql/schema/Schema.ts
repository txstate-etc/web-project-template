import { makeExecutableSchema } from 'apollo-server-express'
import { resolvers } from '../resolvers'
import { timeType } from '../types'

const query = `
  type Query {
    time: Time
  }
`

const typeDefs = [
  query,
  timeType
]

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
