import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';
//import { buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react';

type TypeRtkQuery = typeof rtkQuery & { default?: unknown };
const { buildCreateApi, coreModule, reactHooksModule } = ((rtkQuery as TypeRtkQuery).default ??
  rtkQuery) as typeof rtkQuery;

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export default createApi;
