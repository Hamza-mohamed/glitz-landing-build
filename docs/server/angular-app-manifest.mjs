
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/glitz-landing-build/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/glitz-landing-build"
  },
  {
    "renderMode": 2,
    "route": "/glitz-landing-build/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 70839, hash: '4f490014bc6b17370339c70f450ade7890e120f83527271915e9a33f9ac2d057', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 67476, hash: 'fe85ae7f03119ff7caafcfa762e0936d00a144a0688633354c4a8209459cb9ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 92085, hash: '844941680dd8915e6af214f9d0729198a9c798a821ed729d957e91c6ec0f5ce6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QO2LUG7C.css': {size: 24062, hash: 'mJZxBWMdUcM', text: () => import('./assets-chunks/styles-QO2LUG7C_css.mjs').then(m => m.default)}
  },
};
