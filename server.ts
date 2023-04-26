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

    const assetMap = { script: './src/entry-client.tsx' };

    const renderHtml = await render(req, assetMap, {
      bootstrapModules: [assetMap.script],
      // bootstrapScripts: [assetMap.script],
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        renderHtml.pipe(res);
      },
    });
  } catch (e) {
    vite.ssrFixStacktrace(e as Error);
    next(e);
  }
});

app.listen(PORT__DEV, () => {
  console.log(`Server started at http://localhost:${PORT__DEV}`);
});
