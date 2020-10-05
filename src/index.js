import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//Sends GET req to collect all movies in DB
function* fetchMovieSaga(action) {
  console.log('in fetchMovieSaga with:', action);
  let response = yield Axios({
    method: 'GET',
    url: '/api/movie',
  });
  console.log('Back from GET with', response.data);

  //Calls SET_MOVIE reducer after making GET req
  yield put({
    type: 'SET_MOVIE',
    payload: response.data,
  });
}

//Sends GET req to collect details of a specific movie
function* fetchDetailSaga(action) {
  console.log('hit fetchDetailsSaga with', action, action.payload);

  let response = yield Axios({
    method: 'GET',
    url: `/api/movie/${action.payload}`,
  });

  //Calls SET_DETAIL reducer after making req
  console.log('Got some details', response.data);
  yield put({
    type: 'SET_DETAIL',
    payload: response.data,
  });
}

//Sends POST req to add a new movie
function* addMovieSaga(action) {
  console.log('Hit addMovieSaga with:', action.payload);
  yield Axios({
    method: 'POST',
    url: '/api/movie',
    data: action.payload,
  });
  console.log('New Movie!, updating list.');
  yield put({
    type: 'FETCH_MOVIE',
  });
}

function* rootSaga() {
  yield takeEvery('FETCH_MOVIE', fetchMovieSaga);
  yield takeEvery('FETCH_DETAIL', fetchDetailSaga);
  yield takeEvery('ADD_MOVIE', addMovieSaga);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRE':
      return action.payload;
    default:
      return state;
  }
};

//updates state when seleting a movie to view details of
const details = (state = [], action) => {
  switch (action.type) {
    case 'SET_DETAIL':
      return action.payload;
    default:
      return state;
  }
};

//Updates state when new movie added
const newMovie = (state = [], action) => {
  switch (action.type) {
    case 'SET_NEW_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
    newMovie,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
