import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

//image url
// https://www.thecocktaildb.com/images/ingredients/Light%20rum.png
// drink type https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list

//glass type
// https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list

//drinks https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list

//alcoholic types https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list

//all cocktails https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

//details https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17223

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
