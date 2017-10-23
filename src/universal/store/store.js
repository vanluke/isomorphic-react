import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'universal/reducer';
import rootEpic from 'universal/epic';
import {accommodationService} from 'universal/accommodation/service';
import en from './dev-tools-extenstion';

const composeEnhancers = en();

const loggerMiddleware = createLogger();
export const dependencies = {
  accommodationService,
};

export const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies,
});

const createStoreWithMiddleware = () =>
  createStore(rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware, loggerMiddleware)),
  );

export default function configureStore() {
  return createStoreWithMiddleware();
}
