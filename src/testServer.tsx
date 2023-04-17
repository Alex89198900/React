import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { elem } from './tests/datatest';
const server = setupServer(
  rest.get('https://dummyjson.com/products/', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ elem }));
  }),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(404));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
