const { IPFS_TIMEOUT } = require("./common");

let client;

/**
 *
 * @param projectId: the infura project id
 * @param projectSecret: the infura project secret
 * @returns {IPFSHTTPClient}
 */
async function getInfuraClient(projectId, projectSecret) {
  const authorization =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

    const { create } = await import("kubo-rpc-client");

    if (!client) {
    client = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      timeout: IPFS_TIMEOUT,
      headers: {
        authorization,
      },
    });
  }

  return client;
}

module.exports = {
  getInfuraClient,
};
