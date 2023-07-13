const { IPFS_TIMEOUT } = require("./common");

let client;

/**
 *
 * @param url: local ipfs node ip or url, like '127.0.0.1'
 * @returns {IPFSHTTPClient}
 */
async function getLocalClient(url) {
  const { create } = await import("kubo-rpc-client");

  if (!client) {
    const urlObj = new URL(url);
    client = create({
      host: urlObj.host,
      port: urlObj.port,
      protocol: urlObj.protocol,
      timeout: IPFS_TIMEOUT,
    });
  }

  return client;
}

module.exports = { getLocalClient };
