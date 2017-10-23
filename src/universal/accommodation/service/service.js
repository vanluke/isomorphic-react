import {request} from 'universal/common/service';
import config from 'config';

const url = `/${config.api.routes.accommodations}`;

export const accommodationService = {
  getAccommodations() {
    return request({
      errorMessage: 'An error occured while loading Accommodations',
      path: url,
    });
  },
  createAccommodation(accommodation) {
    return request({
      errorMessage: 'Can not create accommodation',
      path: url,
      type: 'post',
      data: accommodation,
    });
  }
};
