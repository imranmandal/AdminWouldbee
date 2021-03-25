import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { Container } from "react-bootstrap"
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

import { AuthProvider } from './context/auth.context';
import { BrowserRouter } from 'react-router-dom';

// import reportWebVitals from './reportWebVitals';


// import { ApolloProvider, createHttpLink, InMemoryCache, ApolloClient, gql } from '@apollo/client';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:3005/graphql'
// });

// const cache = new InMemoryCache();

// const client = new ApolloClient({
//   link: httpLink,
//   cache
// });

// client.query({
//   query: gql`
//   { 
//     allUsers(
//       perPage: 2
//       page: 1
//     ) {
//       id
//       createdOn
//       email
//       phone
//     }
//   }
//   `
// }).then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ApolloProvider client={client}> */}
        <AuthProvider>
          {/* <Container> */}
            <App />
          {/* </Container> */}
        </AuthProvider>
      {/* </ApolloProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
