import {request} from 'universal/common/service';

export const accommodationService = {
  getAccommodations() {
    return request({
      errorMessage: 'An error occured while loading Accommodations',
      path: '/api/v0/accommodations',
    });
  },
  createAccommodation(accommodation) {
    return request({
      errorMessage: 'Can not create accommodation',
      path: '/api/v0/accommodations',
      type: 'post',
      data: accommodation,
    });
  }
};
