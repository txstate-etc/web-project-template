import { GraphQLResolveInfo } from 'graphql'

export type Resolver = (parent: any, args: { [argName: string]: any }, context: any, info: GraphQLResolveInfo) => any

export interface ResolverStructure {
  query: {
    [key: string]: Resolver
  }
  mutation: {
    [key: string]: Resolver
  }
  subscription: {
    [key: string]: Resolver
  }
}
