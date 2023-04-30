import React from 'react';
import ReactDOMServer, { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import setupStore from './store/store';
import { Router } from './router';
import HTMLtoserver from './HTMLtoserver';
import { Request } from 'express';
import { storeApi } from './store/redusers/apireduser';

const store = setupStore({});
interface EntryClient {
  style?: string;
  script: string;
}

async function render(
  req: Request,
  entryClient: EntryClient,
  opts: ReactDOMServer.RenderToPipeableStreamOptions | undefined
) {
  await store.dispatch(storeApi.endpoints.getStoreData.initiate(''));
  const preloadedState = store.getState();
  return renderToPipeableStream(
    <HTMLtoserver style={entryClient.style} preload={preloadedState}>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <Router />
        </StaticRouter>
      </Provider>
    </HTMLtoserver>,
    opts
  );
}

export { render };
