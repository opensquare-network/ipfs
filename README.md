# osn ipfs client

This is an IPFS client that provides a simplified API interface for uploading content to IPFS.
You can config the API to connect to Infura or a locally ipfs node by parameters.

## Usage example

```javascript
const { getClients, ClientOptions, ClientMode } = require("@osn/ipfs");
const {
  INFURA_PROJECT_ID,
  INFURA_PROJECT_SECRET,
  LOCAL_IPFS_NODE_URL,
  USE_LOCAL_IPFS_NODE,
} = require("../env");

const [ipfsClient] = getClients(
  USE_LOCAL_IPFS_NODE ? ClientMode.Local : ClientMode.Infura,
  new ClientOptions(
    INFURA_PROJECT_ID,
    INFURA_PROJECT_SECRET,
    LOCAL_IPFS_NODE_URL
  )
);

```
