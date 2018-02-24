import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import {
  Header,
  MainContent,
  Sidebar,
} from '../common';

import './App.css';

class App extends React.Component {

  render() {
    return (
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
    );
  }
}

export default App;
