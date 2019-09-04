import { ResolverStructure } from '../Interfaces'

export const timeResolvers: ResolverStructure = {
  query: {
    time: (parent, args, context, info) => {
      return {
        now: new Date().toISOString(),
        epoch: new Date().valueOf()
      }
    }
  },
  mutation: {},
  subscription: {}
}
