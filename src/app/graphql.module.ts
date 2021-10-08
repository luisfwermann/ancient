import { WebSocketLink } from '@apollo/client/link/ws';
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { getMainDefinition } from 'apollo-utilities';

const uri = '://api-staging.csgoroll.com/graphql';

export const createApollo = (httpLink: HttpLink): ApolloClientOptions<any> => {
  const http = httpLink.create({ uri: `https${uri}`, withCredentials: true });
  const subscriptions = new WebSocketLink({ uri: `ws${uri}`, options: { reconnect: true } });

  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query) as { kind: string; operation: string };
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    subscriptions,
    http
  );

  return { link, cache: new InMemoryCache() };
};

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
