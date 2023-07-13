const { getLocalClient } = require("./local");
const { getInfuraClient } = require("./infura");

/**
 *
 * @param clientMode
 * @param clientOptions
 * @returns {IPFSHTTPClient[]}
 */
async function getClients(clientMode, clientOptions) {
  if (clientMode.mode === 0) {
    return [
      await getInfuraClient(
        clientOptions.infuraProjectId,
        clientOptions.infuraProjectSecret
      ),
      await getLocalClient(clientOptions.localNodeIpOrUrl),
    ];
  }

  if (clientMode.mode === 1) {
    return [await getLocalClient(clientOptions.localNodeIpOrUrl)];
  }

  if (clientMode.mode === 2) {
    return [
      await getInfuraClient(
        clientOptions.infuraProjectId,
        clientOptions.infuraProjectSecret
      ),
    ];
  }

  throw new Error("Invalid IPFS clients creation mode");
}

module.exports = {
  getClients,
};
