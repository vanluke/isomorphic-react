import {accommodationsService} from './accommodations.service';

export default (router) => {
  router.get('/accommodations', async (req, res) => {
    const accommodations = await accommodationsService.getAll();
    res.status(201).json(accommodations);
  })
  .post('/accommodations', async (req, res) => {
    const accommodation = await accommodationsService.create(req.body);
    res.status(201).json(accommodation);
  });
};