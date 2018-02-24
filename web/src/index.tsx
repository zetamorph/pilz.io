import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from './Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { configureStore } from './redux/configure-store';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
