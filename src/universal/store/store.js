import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'universal/reducer';
import rootEpic from 'universal/epic';
import {accommodationService} from 'universal/accommodation/service';
import en from './dev-tools-extenstion';

const loggerMiddleware = createLogger();
export const dependencies = { 
  accommodationService,
};
export const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies,
});

const createStoreWithMiddleware
  = preloadedState => createStore(rootReducer,
    preloadedState,
    applyMiddleware(epicMiddleware, loggerMiddleware),
  );

const getPreloadedState = () => {
  const preloadedState = typeof window !== 'undefined'
    && window.__PRELOADED_STATE__
    ? {...window.__PRELOADED_STATE__}
    : {}
  //delete window.__PRELOADED_STATE__;
  return preloadedState;
}

export default function configureStore() {
  return createStoreWithMiddleware(getPreloadedState());
}
