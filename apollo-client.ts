import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.yelp.com/v3/graphql'
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = process.env.API_KEY;
    return {
        headers: {
            ...headers,
            "Authorization": `Bearer ${token}`
        }
    }
});


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;