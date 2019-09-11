import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles/global-styles';
import { ApolloProvider  } from "react-apollo";
import App from './App';
import client from './apollo';

ReactDOM.render(
<ApolloProvider client={client}>
    <App />
    <GlobalStyles />
</ApolloProvider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA