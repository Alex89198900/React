import { getData } from '../model';
import { server, rest } from '../testServer';
import { elem, cardTest } from './datatest';
it('converts correctly', async () => {
  const rate = await getData('');
  expect(rate).toEqual({ elem });
});

it('handles failure', async () => {
  server.use(
    rest.get('https://dummyjson.com/products/', (_req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  expect(getData('/\\iiiiii')).rejects.toThrow(
    'invalid json response body at https://dummyjson.com/products///iiiiii reason: Unexpected end of JSON input'
  );
});

it('single req', async () => {
  server.use(
    rest.get('https://dummyjson.com/products/', (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(cardTest));
    })
  );

  expect(getData('1')).rejects.toThrow();
});
