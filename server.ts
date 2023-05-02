import express from 'express';
import { createServer } from 'vite';
const app = express();

const PORT__DEV = 3333;

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res, next) => {
  try {
    const render = (await vite.ssrLoadModule('./src/entry-server.tsx')).render;

    const entryClient = { script: './src/entry-client.tsx' };

    const renderHtml = await render(req, entryClient, {
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        renderHtml.pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.setHeader('content-type', 'text/html');
        res.send('<h1>Something went wrong</h1>');
      },
      bootstrapModules: [entryClient.script],
    });
  } catch (e) {
    vite.ssrFixStacktrace(e as Error);
    next(e);
  }
});

app.listen(PORT__DEV, () => {
  console.log(`Server started at http://localhost:${PORT__DEV}`);
});
