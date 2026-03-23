// Polyfill globalThis.crypto for Node environments that don't expose Web Crypto globally.
// Required by serialize-javascript >= 7.x used during the react-scripts build.
const { webcrypto } = require('crypto');
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}
