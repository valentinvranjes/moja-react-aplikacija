import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, useQuery } from "@apollo/react-hooks";
// import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';


//konfiguracija klijenta što želimo pokazati
// const client = new ApolloClient({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io/'
// });

// import { InMemoryCache } from "@apollo/react-hooks";
//nimport { createHttpLink } from "@apollo/react-hooks";
// import { ApolloClient } from "@apollo/react-hooks";

const httpLink = new createHttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io/'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

function ExchangeRates() {
    const { loading, error, data } = useQuery(gql`
    {
        rates(currency: "EUR") {
            currency
            rate
        }
    }
    `)

if (loading) return <p>Loading...</p>
if (error) return <p>Error...</p>

return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
        <p>
            {currency}: {rate}
        </p>
    </div>
));
}

const AppGraphQl = () => (
    <ApolloProvider client={client}>
        <div>
            <h2>Upit serveru:</h2>
            <h2>https://api.coinbase.com/v2/exchange-rates?currency=USD</h2>
        </div>
    </ApolloProvider>
)

export default AppGraphQl;