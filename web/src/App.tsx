import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import { ApolloProvider } from 'react-apollo';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  Header,
  MainContent,
  Sidebar,
} from './common';

import './App.css';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'http://localhost:3001/graphql'})
});

class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Router>
          <Layout>
            <Header/>
            <Layout>
              <Sidebar/>
              <Layout>
                <MainContent/>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
