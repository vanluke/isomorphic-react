const accommodations = require('./accommodations');

export const accommodationsService = {
  getAll() {
    return Promise.resolve([
      ...accommodations,
    ]);
  },
  create(accommodation) {
    return Promise.resolve([
      ...accommodations,
      accommodation,
    ]);
  }
}