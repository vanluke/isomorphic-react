import router from './router';
import accommodations from '../accommodations';

export default (app) => {
  accommodations(router);
  app.use('/api/v0', router);
};

