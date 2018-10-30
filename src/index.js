import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import  gql  from 'graphql-tag';
import * as serviceWorker from './serviceWorker';




export const ExchangeRates = () => (
    <Query
        query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.rates.map(({ currency, rate }) => (
                <div key={currency}>
                    <p>{`${currency}: ${rate}`}</p>
                </div>
            ));
        }}
    </Query>
);

ReactDOM.render(
    <ApolloProvider client={ client }>
        <App />
    </ApolloProvider>, document.getElementById('root'));

serviceWorker.unregister();
