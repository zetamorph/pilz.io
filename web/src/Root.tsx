import { Provider } from 'react-redux';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './app/App';

export class Root extends React.Component<any, any> {

    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <Router>
                    <Route path="/" component={App} />
                </Router>
            </Provider>
        );
    }
}