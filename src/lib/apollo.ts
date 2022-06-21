import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-us-east-1.graphcms.com/v2/cl4o26s7i07bg01z2c9px0i5v/master',
    cache: new InMemoryCache()
})