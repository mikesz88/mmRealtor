// Ensure there's a global crypto with getRandomValues for packages that expect browser crypto.
// Required by serialize-javascript >= 7.x used during the react-scripts build.
const nodeCrypto = require('crypto');

if (!globalThis.crypto) {
  if (nodeCrypto.webcrypto) {
    // Node >= 15 exposes webcrypto as crypto.webcrypto
    globalThis.crypto = nodeCrypto.webcrypto;
  } else {
    // Fallback for older Node: implement getRandomValues using randomFillSync
    globalThis.crypto = {
      getRandomValues(arr) {
        if (!(arr instanceof Uint8Array)) {
          throw new TypeError('Expected Uint8Array');
        }
        return nodeCrypto.randomFillSync(arr);
      },
    };
  }
}
