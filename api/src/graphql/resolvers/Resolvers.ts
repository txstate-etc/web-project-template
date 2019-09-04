import { timeResolvers } from './TimeResolvers'

export const resolvers = {
  Query: {
    time: timeResolvers.query.time
  }
}
