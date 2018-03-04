import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from './Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { configureStore } from './redux/configure-store';
// import needed RxJS operators
import './util/rx-operators';
import './util/redux-fsa-of-action';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
